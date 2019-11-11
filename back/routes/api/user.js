const { isLoggedIn, isNotLoggedIn } = require('../middleware');

const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { select, change } = require('../../oracle/query');

const router = express.Router();

router.get('/', isLoggedIn, (req, res) => {
  return res.json(req.user);
});

router.post('/signup', isNotLoggedIn, async (req, res, next) => {
  console.log(req.body);
  const { id, password } = req.body;
  const sql = `select * from users where user_id = '${id}'`;
  const exUser = await select(sql);
  console.log("exUser:  ",exUser);
  if (exUser.length) return res.status(403).json({ reason: "이미 등록된 아이디입니다. "});
  console.log('회원가입중');
  const hashedPW = await bcrypt.hash(password, 10);
  const sql2 = `insert into users(user_id, user_pw) values('${id}', '${hashedPW}')`;
  await change(sql2);
  return res.json({ info: "회원가입이 완료되었습니다." });
});

router.post('/login', isNotLoggedIn, async (req, res, next) => {
  console.log(req.cookies);
  passport.authenticate('local', (err, user, info) => {
    if (err) { 
      console.error(err);
      return next(err);
    }
    if (info) {
      console.log(info);
      return res.status(401).json(info);
    }
    return req.login(user, async (loginErr) => {
      try {
        if (loginErr) {
          console.error("login Error",loginErr);
          return next(loginErr);
        }
        return res.json({ user });
      } catch (e) {
        next(e);
      }
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('logout 성공');
});

module.exports = router;