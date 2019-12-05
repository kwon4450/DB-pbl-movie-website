const { isLoggedIn, isNotLoggedIn } = require("../middleware");

const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { select, change } = require('../../db');

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

router.get("/idCheck", isNotLoggedIn, async (req, res) => {
  const { id } = req.query;
  const sql = "select * from user where user_id = ?";
  const exUser = await select(sql, [id]);
  console.log("exUser:  ",exUser);
  if (exUser) return res.json({ info: "이미 등록된 아이디입니다.", possible: false });
  return res.json({ info: "사용가능한 아이디입니다.", possible: true });
});

router.get("/mailCheck", isNotLoggedIn, async (req, res) => {
  const { mail } = req.query;
  const sql = "select * from user where mail = ?";
  const exUser = await select(sql, [mail]);
  console.log("exUser:  ",exUser);
  if (exUser) return res.json({ info: "이미 등록된 메일입니다." });
  return res.json({ info: "" });
});

router.get("/phoneCheck", isNotLoggedIn, async (req, res) => {
  const { phone } = req.query;
  console.log(phone);
  const sql = "select * from phone where phone_num = ?";
  const exUser = await select(sql, [phone]);
  console.log("exUser:  ",exUser);
  if (exUser) return res.json({ info: "이미 등록된 휴대전화 번호입니다." });
  return res.json({ info: "" });
});

router.post("/signup", isNotLoggedIn, async (req, res, next) => {
  console.log("signupAPI");
  console.log(req.body);
  const { id, password, gender, mail, f_name, l_name, phone } = req.body.user;
  console.log (id, password, gender, mail, f_name, l_name, phone);
  var sql = `select * from user where user_id = '${id}'`;
  const exUser = await select(sql);
  console.log("exUser:  ", exUser);
  if (exUser)
    return res.status(403).json({ info: "이미 등록된 아이디입니다. " });
  console.log("회원가입중");
  const hashedPW = await bcrypt.hash(password, 10);
  try {
    querys = []
    querys[0] = {
      sql: "insert into user(user_id, user_pw, mail, gender, class, f_name, l_name) values(?, ?, ?, ?, ?, ?, ?)",
      args: [id, hashedPW, mail, gender, '일반', f_name, l_name]
    }
    querys[1] = {
      sql: "insert into phone(phone_num, user_id) values(?, ?)",
      args: [phone, id]
    }
    await change(querys);
    return res.json({ info: "회원가입이 완료되었습니다." });
  } catch (e) {
    console.error(e);
  }
});

router.post("/login", isNotLoggedIn, async (req, res, next) => {
  console.log("loginAPI");
  console.log(req.isAuthenticated());
  console.log(req.session);
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
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
        res.cookie("userID", user.id);
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

router.get("/userinfo", isLoggedIn, (req, res) => {
  console.log("userinfoAPI");
  console.log(req.user);
  res.send(req.user);
});

module.exports = router;
