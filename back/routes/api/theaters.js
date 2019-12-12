const { isLoggedIn } = require("../middleware");

const express = require("express");
const { select, change } = require("../../db");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = [];
  const index = {
    "01": 0,
    "02": 1,
    "202": 2,
    "12": 3,
    "03,205": 4,
    "11": 5,
    "05,207": 6,
    "204": 7,
    "206,04,06": 8
  };
  const area = await select("select * from area");
  for (let i = 0; i < area.length; i++) {
    data[index[area[i].areacode]] = {
      areacode: area[i].areacode,
      areaname: area[i].areaname,
      theaterList: []
    };
  }
  const theaters = await select(
    "select * from theater inner join area on theater.areacode = area.areacode"
  );
  for (let i = 0; i < theaters.length; i++) {
    data[index[theaters[i].areacode]].theaterList.push({
      areacode: theaters[i].areacode,
      theatercode: theaters[i].id,
      theatername: theaters[i].name,
      address: theaters[i].address,
      tele: "1544-9801",
      totalscreens: theaters[i].totalscreens,
      totalseats: theaters[i].totalseats
    });
  }

  const ftdata = [];
  if (req.isAuthenticated()) {
    const fts = await select(
      "select theater.* from theater join favoritetheater on theater.id = favoritetheater.theater_id where favoritetheater.user_id = ?",
      [req.user.user_id]
    );
    for (const ft of fts) {
      ftdata.push({
        areacode: ft.areacode,
        theatercode: ft.id,
        theatername: ft.name,
        address: ft.address,
        tele: "1544-9801",
        totalscreens: ft.totalscreens,
        totalseats: ft.totalseats
      });
    }
  }

  return res.json({ allTheaterList: data, favTheaterList: ftdata });
});

router.post("/favoritetheater", async (req, res) => {
  const { theaterid } = req.body.data;
  await change([
    {
      sql: "insert into favoritetheater(user_id, theater_id) values(?, ?)",
      args: [req.user.user_id, theaterid]
    }
  ]);
  return res.json({ info: "ok" });
});

router.get("/timetable", async (req, res) => {
  const { theatercode, date } = req.query;
  console.log(theatercode, date);
  require("date-utils");
  let d = new Date();
  let dt = d.toFormat("YYYYMMDD HH24MI");
  const nowDate = dt.split(" ")[0];
  const nowTime = dt.split(" ")[1];
  if (parseInt(nowDate.replace(/-/gi, "")) > date) return res.json([]);
  const timetables = await select(
    "select movie.id movieid, movie.movie_title movietitle, movie.grade grade, movie.genre genre, movie.runnung_time runningtime, movie.opening_date releasedate, screen.id screenid, screen.name screenname, timetable.id timetableid, timetable.screen_type screentype, screen.totalseats totalseats, timetable.start_time starttime from theater join screen on theater.id = screen.theater_id join timetable on screen.id = timetable.screen_id join movie on movie.id = timetable.movie_id where theater.id = ? and timetable.start_date = ? order by starttime",
    [theatercode, date]
  );
  const data = [];

  console.log(nowDate, nowTime);
  for (const timetable of timetables) {
    if (parseInt(timetable.starttime) + 20 < parseInt(nowTime)) continue;
    let movieindex = -1;
    let screenindex = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].movieid == timetable.movieid) {
        movieindex = i;
        break;
      }
    }
    if (movieindex == -1) {
      movieindex = data.length;
      data[movieindex] = {
        movieid: timetable.movieid,
        movietitle: timetable.movietitle,
        grade: timetable.grade,
        genre: timetable.genre,
        runningtime: timetable.runningtime,
        releasedate: timetable.releasedate,
        screenList: []
      };
    }
    for (const [i, screen] of data[movieindex].screenList.entries()) {
      if (screen.screenname == timetable.screenname) {
        screenindex = i;
        break;
      }
    }
    if (screenindex == -1) {
      screenindex = data[movieindex].screenList.length;
      data[movieindex].screenList[screenindex] = {
        screenid: timetable.screenid,
        screenname: timetable.screenname,
        screentype: timetable.screentype,
        totalseats: timetable.totalseats,
        timetableList: []
      };
    }
    let endtime = String(
      parseInt(timetable.starttime) + parseInt(timetable.runningtime) + 10
    );
    while (endtime.length != 4) endtime = "0" + endtime;
    const timetableindex =
      data[movieindex].screenList[screenindex].timetableList.length;
    data[movieindex].screenList[screenindex].timetableList.push({
      timetableid: timetable.timetableid,
      starttime: timetable.starttime,
      endtime: endtime,
      seatList: []
    });
    let seatList = [];
    const seats = await select(
      "select id seatid, row_index, col_index, row_num, col_num from seat where screen_id = ?",
      [timetable.screenid]
    );
    for (const seat of seats) {
      let index = -1;
      for (let i = 0; i < seatList.length; i++) {
        if (
          seatList[i].row_i == seat.row_index &&
          seatList[i].col_i == seat.col_index
        ) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        index = seatList.length;
        seatList.push({
          row_i: seat.row_index,
          col_i: seat.col_index,
          seats: []
        });
      }
      const isFull = await select("select * from ticket where seat_id = ? and timetable_id = ?", [seat.seatid, timetable.timetableid]);
      seatList[index].seats.push({
        seatid: seat.seatid,
        row: seat.row_num,
        col: seat.col_num,
        full: isFull.length ? true : false
      });
    }

    data[movieindex].screenList[screenindex].timetableList[
      timetableindex
    ].seatList = seatList;
  }
  return res.json(data);
});

router.get("/seats", async (req, res, next) => {
  const { screen } = req.query;
  const temp = await select(`select * from seat where screen_id = ${screen}`);
  var data = new Array();
  for (i = 0; i < temp.length; i++) {
    seat_id = temp[i].id;
    row_i = temp[i].row_index;
    col_i = temp[i].col_index;
    row = temp[i].row_num;
    col = temp[i].col_num;
    index = -1;
    for (j = 0; j < data.length; j++) {
      if (data[j]["row_i"] == row_i && data[j]["col_i"] == col_i) {
        index = j;
        break;
      }
    }
    if (index == -1) {
      var obj = new Object();
      obj["row_i"] = row_i;
      obj["col_i"] = col_i;
      obj["seats"] = new Array();
      data.push(obj);
      index = data.length - 1;
    }
    var obj = new Object();
    obj["id"] = seat_id;
    obj["row"] = row;
    obj["col"] = col;
    obj["full"] = false;
    data[index]["seats"].push(obj);
  }

  return res.json(data);
});

module.exports = router;
