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

router.get('/reserinfo', isLoggedIn, (req, res) => {
  const { reserid } = req.body;
  
  return res.json({});
})

module.exports = router;