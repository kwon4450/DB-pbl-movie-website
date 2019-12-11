const { isLoggedIn } = require("../middleware");

const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { select, change } = require("../../db");

const router = express.Router();

router.get("/loginCheck", (req, res) => {
  console.log("loginCheck");
  let Auth = req.isAuthenticated();
  console.log("Auth: ", Auth);
  if (!Auth) {
    res.clearCookie("userID");
    res.clearCookie("connect.sid");
  }

  return res.json({ auth: Auth });
});

router.get("/idCheck", async (req, res) => {
  const { id } = req.query;
  const sql = "select * from user where user_id = ?";
  const exUser = await select(sql, [id]);
  console.log("exUser:  ", exUser);
  if (exUser.length)
    return res.json({ info: "이미 등록된 아이디입니다.", possible: false });
  return res.json({ info: "사용가능한 아이디입니다.", possible: true });
});

router.get("/mailCheck", async (req, res) => {
  const { mail } = req.query;
  const sql = "select * from user where mail = ?";
  const exUser = await select(sql, [mail]);
  console.log("exUser:  ", exUser);
  if (exUser.length) return res.json({ info: "이미 등록된 메일입니다." });
  return res.json({ info: "" });
});

router.get("/phoneCheck", async (req, res) => {
  const { phone } = req.query;
  console.log(phone);
  const sql = "select * from phone where phone_num = ?";
  const exUser = await select(sql, [phone]);
  console.log("exUser:  ", exUser);
  if (exUser.length)
    return res.json({ info: "이미 등록된 휴대전화 번호입니다." });
  return res.json({ info: "" });
});

router.post("/signup", async (req, res, next) => {
  console.log("signupAPI");
  console.log(req.body);
  const { id, password, gender, mail, f_name, l_name, phone } = req.body.user;
  console.log(id, password, gender, mail, f_name, l_name, phone);
  var sql = `select * from user where user_id = '${id}'`;
  const exUser = await select(sql);
  console.log("exUser:  ", exUser);
  if (exUser.length)
    return res.status(403).json({ info: "이미 등록된 아이디입니다. " });
  console.log("회원가입중");
  const hashedPW = await bcrypt.hash(password, 10);
  try {
    querys = [];
    querys[0] = {
      sql:
        "insert into user(user_id, user_pw, mail, gender, class, f_name, l_name) values(?, ?, ?, ?, ?, ?, ?)",
      args: [id, hashedPW, mail, gender, "일반", f_name, l_name]
    };
    querys[1] = {
      sql: "insert into phone(phone_num, user_id) values(?, ?)",
      args: [phone, id]
    };
    await change(querys);
    return res.json({ info: "회원가입이 완료되었습니다." });
  } catch (e) {
    console.error(e);
  }
});

router.post("/login", async (req, res, next) => {
  console.log("loginAPI");
  console.log(req.isAuthenticated());
  console.log(req.session);
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err, "err in passport.authenticate");
      return next(err);
    }
    if (info) {
      console.log("here", info);
      return res.status(401).json(info);
    }
    return req.login(user, loginErr => {
      try {
        if (loginErr) {
          console.error("login error", loginErr);
          return next(loginErr);
        }
        console.log(req.session);
        res.cookie("userID", user.user_id);
        return res.json({ user });
      } catch (e) {
        next(e);
      }
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, (req, res) => {
  console.log("logoutAPI");
  req.logout();
  req.session.destroy();
  res.send("logout 성공");
});

router.post("/idFind", async (req, res) => {
  const { mail, phone } = req.body;
  const id = await select(
    "select user.user_id from user join phone on user.user_id = phone.user_id where user.mail = ? and phone.phone_num = ?",
    [mail, phone]
  );
  if (id.length) {
    let sendid = id[0].user_id.substr(0, id[0].user_id.length - 2) + "**";
    1;
    console.log(sendid);
    res.json({ id: sendid });
  } else {
    res.status(401).json({ info: "존재하지 않는 사용자입니다." });
  }
});

router.post("/pwFind", async (req, res) => {
  const { id, mail, phone } = req.body;
  const user = await select(
    "select user.user_id, user.user_pw from user join phone on user.user_id = phone.user_id where user.user_id = ? and user.mail = ? and phone.phone_num = ?",
    [id, mail, phone]
  );
  if (userid.length) {
    return res.json({ id: user[0].user_id, key: user[0].user_pw });
  } else {
    return res.status(401).json({ info: "존재하지 않는 사용자입니다." });
  }
});

router.post("/pwChange", async (req, res) => {
  const { id, key, newpw } = req.body;
  const hashedPW = await bcrypt.hash(newpw, 10);
  try {
    await change({
      sql: "update user set user_pw = ? where user_id = ? and user_pw = ?",
      args: [hashedPW, id, key]
    });
    return res.json({ info: "비밀번호가 변경되었습니다." });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ info: e });
  }
});

router.post("/wishlist", isLoggedIn, async (req, res) => {
  const { movieid } = req.body;
  try {
    await change([
      {
        sql: "insert into wishlist(user_id, movie_id) values(?, ?)",
        args: [req.user.user_id, movieid]
      }
    ]);
    return res.json({ info: "ok" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ info: e });
  }
});

router.get("/mypage", isLoggedIn, async (req, res) => {
  const tickets = await select(
    "select reservation.id reservationcode, reservation.payment_type, reservation.price, movie.id movieid, movie.movie_title movietitle, movie.runnung_time runningtime, timetable.screen_type screentype, timetable.start_date startdate, timetable.start_time starttime, theater.id theaterid, theater.name theatername, screen.id screenid, screen.name screenname, ticket.seat_id seatid from reservation join timetable on timetable.id = reservation.timetable_id join movie on movie.id = timetable.movie_id join screen on screen.id = timetable.screen_id join theater on theater.id = screen.theater_id join ticket on ticket.reservation_id = reservation.id where reservation.user_id = ?",
    [req.user.user_id]
  );
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
      let endtime = String(
        parseInt(ticket.starttime + ticket.runningtime + 20)
      );
      while (endtime.length < 4) {
        endtime = "0" + endtime;
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
      });
    }
    data[reserIndex].seatList.push({
      seatid: ticket.seatid,
      row: ticket.row_num,
      col: ticket.col_num
    });
  }
  console.log(data);

  const fts = await select(
    "select theater.* from theater join favoritetheater on theater.id = favoritetheater.theater_id where favoritetheater.user_id = ?",
    [req.user.user_id]
  );
  const ftdata = [];
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

  const wmdata = await select(
    "select movie.id movieid, is_screening isscreening, movie_title movietitle, opening_date releasedate, rate rating, grade, director, actor, genre, plot story from movie join wishlist on movie.id = wishlist.id where wishlist.user_id = ?",
    [req.user.user_id]
  );

  return res.json({
    user: req.user,
    wishList: wmdata,
    favoritetheaterList: ftdata,
    reservationList: data
  });
});

module.exports = router;
