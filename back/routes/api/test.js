const express = require('express');
const cors = require('cors');
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
  const { id, password, gender, mail, f_name, l_name } = req.body.user;
  console.log (id, password, gender, mail, f_name, l_name);
  return res.json({ info: "정상 작동", data: null});
})

router.get('signup', async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  return res.json({info: "ㅋㅋ"});
})

router.get('/idCheck', async (req, res) => {
  console.log(1);
  res.header('Access-Control-Allow-Origin', '*');
  const { id } = req.query;
  console.log(id);
  const sql = `select * from client where id = '${id}'`;
  const exUser = await select(sql);
  console.log("exUser:  ",exUser);
  if (exUser) return res.json({ info: "이미 등록된 아이디입니다. "});
  return res.json({ info: "사용가능한 아이디입니다. "})
})

module.exports = router;