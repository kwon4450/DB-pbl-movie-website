const express = require('express');
const { transfer } = require('../../db/transfer/transfer');

const router = express.Router();

router.get('/timetable', async (req, res, next) => {
  const { theatercode, date, json } = req.body;
  const info = {
    theatercode: theatercode,
    date: date
  }
  try {
    await transfer(info, json);
    return res.json({ info: "ok"});
  } catch(e) {
    console.error(e);
    return res.json({ info: e });
  }
})

module.exports = router;