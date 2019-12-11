const express = require('express');
const { transTheater, transTimetable, transMovie } = require('../../db/transfer');

const router = express.Router();

router.post('/upload/timetable', async (req, res, next) => {
  const { theatercode, date, json } = req.body.data;
  const info = {
    theatercode: theatercode,
    date: date
  }
  const data = JSON.parse(json);
  try {
    await transTimetable(info, data);
    return res.json({ info: "ok"});
  } catch(e) {
    console.error(e);
    return res.json({ info: e });
  }
})

router.post('/upload/theater', async (req, res) => {
  const { json } = req.body.data;
  const data = JSON.parse(json);
  try {
    await transTheater(data);
    return res.json({ info: "ok"});
  } catch(e) {
    console.error(e);
    return res.json({ info: e });
  }
})

router.post('/upload/movie', async (req, res) => {
  const { json } = req.body.data;
  const data = JSON.parse(json);
  try {
    await transMovie(data);
    return res.json({ info: "ok"});
  } catch(e) {
    console.error(e);
    return res.json({ info: e });
  }
})

module.exports = router;