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
  const x = req.user;
  console.log(x);
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

router.post("/idFind", async (req, res) => {
  const { mail, phone } = req.body;
  const id = await select("select user.user_id from user join phone on user.user_id = phone.user_id where user.mail = ? and phone.phone_num = ?", [mail, phone]);
  if (id.length) {
    let sendid = id[0].user_id.substr(0,id[0].user_id.length-2) + '**';1
    console.log(sendid)
    res.json({ id: sendid });
  }
  else {
    res.status(401).json({ info: "존재하지 않는 사용자입니다." });
  }
})

router.post("pwFind", async (req, res) => {
  const { id, mail, phone } = req.body;
  const user = await select("select user.user_id, user.user_pw from user join phone on user.user_id = phone.user_id where user.user_id = ? and user.mail = ? and phone.phone_num = ?", [id, mail, phone]);
  if (userid.length) {
    return res.json({ id: user[0].user_id, key: user[0].user_pw });
  }
  else {
    return res.status(401).json({ info: "존재하지 않는 사용자입니다." });
  }
})

router.post("pwChange", async (req, res) => {
  const { id, key, newpw } = req.body;
  const hashedPW = await bcrypt.hash(newpw, 10);
  try {
    await change({ sql: "update user set user_pw = ? where user_id = ? and user_pw = ?", args: [hashedPW, id, key]});
    return res.json({ info: "비밀번호가 변경되었습니다." });
  } catch(e) {
    console.error(e);
    return res.status(500).json({ info: e });
  }
})

router.get("/userinfo", isLoggedIn, (req, res) => {
  console.log("userinfoAPI");
  console.log(req.user);
  res.send(req.user);
});

// router.post("/wishlist", isLoggedIn, (req, res) => {
//   const 
// })
module.exports = router;
