const { isLoggedIn, isNotLoggedIn } = require('../middleware');

const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { select, change } = require('../../oracle');

const router = express.Router();

router.get('/', isLoggedIn, (req, res) => {
  console.log(req.user);
  return res.json(req.user);
});

router.post('/signup', isNotLoggedIn, async (req, res, next) => {
  console.log(req.body);
  const { id, password, mail, gender, f_name, l_name } = req.body.user;
  const sql = `select * from client where id = '${id}'`;
  const exUser = await select(sql);
  console.log("exUser:  ",exUser);
  if (exUser.length) return res.status(403).json({ reason: "이미 등록된 아이디입니다. "});
  console.log('회원가입중');
  const hashedPW = await bcrypt.hash(password, 10);
  const sql2 = `insert into client(id, password, mail, gender, class, f_name, l_name) \
                values('${id}', '${hashedPW}', '${mail}', '${gender}', '일반', '${f_name}', '${l_name}')`;
  await change(sql2);
  return res.json({ info: "회원가입이 완료되었습니다." });
});

router.post('/login', isNotLoggedIn, async (req, res, next) => {
  console.log(req.cookies);
  console.log(req.session);
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

router.get('/mypage', isLoggedIn, (req, res) => {
  console.log(req.user);
  
})

module.exports = router;