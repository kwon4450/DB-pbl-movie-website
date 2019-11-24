const express = require('express');
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

module.exports = router;