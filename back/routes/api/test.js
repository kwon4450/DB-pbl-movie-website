const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { select, change } = require('../../oracle');

const router = express.Router();

router.options('/signup', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send();
})

router.post('/signup', async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  const { id, password, gender, mail, f_name, l_name, phone } = req.body.user;
  console.log (id, password, gender, mail, f_name, l_name, phone);
  var sql = `select * from client where id = '${id}'`;
  const exUser = await select(sql);
  console.log("exUser:  ",exUser);
  if (exUser) return res.status(403).json({ info: "이미 등록된 아이디입니다. "});
  console.log('회원가입중');
  const hashedPW = await bcrypt.hash(password, 10);
  try {
    sql = `insert into client(id, password, mail, gender, class, f_name, l_name) \
                  values('${id}', '${hashedPW}', '${mail}', '${gender}', '일반', '${f_name}', '${l_name}')`;
    await change(sql);
    sql = `insert into phone(phone_num, client_id) values('${phone}', '${id}')`
    await change(sql);
    return res.json({ info: "회원가입이 완료되었습니다." });
  } catch(e) {
    console.error(e);
  }
})

router.options('/login', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send();
})

router.post('/login', async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.cookies);
  console.log(req.session);
  passport.authenticate('local', (err, user, info) => {
    if (err) { 
      console.error(err);
      return next(err);
    }
    if (info) {
      console.log("here", info);
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

router.get('/idCheck', async (req, res) => {
  console.log(1);
  res.header('Access-Control-Allow-Origin', '*');
  const { id } = req.query;
  console.log(id);
  const sql = `select * from client where id = '${id}'`;
  const exUser = await select(sql);
  console.log("exUser:  ",exUser);
  if (exUser) return res.json({ info: "이미 등록된 아이디입니다.", possible: false });
  return res.json({ info: "사용가능한 아이디입니다.", possible: true });
})

module.exports = router;