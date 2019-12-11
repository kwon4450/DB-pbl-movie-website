const { isLoggedIn } = require('../middleware');

const express = require('express');
const { select, change } = require('../../db');

const router = express.Router();

router.post('/', isLoggedIn, async (req, res) => {
  const { payment_type, theater_id, timetable_id, seats, date } = req.body;
  const num = await select("select count(*) num from reservation join timetable on timetable.id = reservation.timetable_id join screen on timetable.screen_id = screen.id join theater on theater.id = screen.theater_id where theater.id = ?", [theater_id]);
  let theater = String(theater_id);
  while (theater.length < 3) {
    theater = "0" + theater;
  }
  let resernum = String(num[0].num);
  while (resernum.length < 4) {
    resernum = "0" + resernum;
  }
  const reserid = date.substr(date.length-2) + theater + resernum;
  let price = 0;
  for (const seat of seats) {
    price += seat.price;
  }
  let querys = [];
  querys.push({
    sql: "insert into reservation(id, user_id, timetable_id, payment_type, price) values(?,?,?,?,?)",
    args: [reserid, req.user.user_id, timetable_id, payment_type, price]
  })
  for (const seat of seats) {
    querys.push({
      sql: "insert into ticket(reservation_id, seat_id) values(?, ?)",
      args: [reserid, seat.id]
    })
  }
  try {
    await change(querys);
    return res.json({ info: "예매가 완료되었습니다. "});
  } catch(e) {
    console.error(e);
    return res.status(500).json({ info: e });
  }
})

router.get('/reserinfo', async (req, res) => {
  const tickets = await select("select reservation.id reservationcode, reservation.payment_type, reservation.price, movie.id movieid, movie.movie_title movietitle, movie.running_time runningtime, timetable.screen_type screentype, timetable.start_date startdate, timetable.start_time starttime, theater.id theaterid, theater.name theatername, screen.id screenid, screen.name screenname, ticket.seat_id seatid from reservation join timetable on timetable.id = reservation.timetable_id join movie on movie.id = timetable.movie_id join screen on screen.id = timetable.screen_id join theater on theater.id = screen.theater_id join ticket on ticket.reservation_id = reservation.id where reservation.user_id = ?", ['kwon4450']);
  const data = [];
  for (const ticket of tickets) {
    let reserIndex = -1;
    for (let i = 0; i < data.length; i++) {
      if (ticket.reservationcode == data[i].reservationcode) {
        reserIndex = i;
        break;
      }
    }
    if (reserIndex == -1) {
      reserIndex = data.length;
      let endtime = String(parseInt(ticket.starttime + ticket.runningtime + 20));
      while (endtime.length < 4) {
        endtime = '0' + endtime;
      }
      data.push({
        reservationcode: ticket.reservationcode,
        paymenttype: ticket.payment_type,
        price: ticket.price,
        movieid: ticket.movieid,
        movietitle: ticket.movietitle,
        runningtime: ticket.runningtime,
        screentype: ticket.screentype,
        startdate: ticket.startdate,
        starttime: ticket.starttime,
        endtime: endtime,
        theaterid: ticket.theaterid,
        thaetername: ticket.thaetername,
        screenid: ticket.screenid,
        screenname: ticket.screenname,
        seatList: []
      })
    }
    data[reserIndex].seatList.push({
      seatid: ticket.seatid
    })
  }
  return res.json(data);
})

module.exports = router;