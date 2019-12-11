const express = require('express');
const { select, change } = require('../../db');

const router = express.Router();

router.get('/', async (req, res) => {
  const { sortby } = req.query;
  switch (sortby) {
    case "rating":
      const movies = await select("select id movieid, is_screening isscreening, movie_title movietitle, opening_date releasedate, rate rating, grade, director, actor, genre, plot story from movie order by rate desc limit 6");
      return res.json(movies);
    case "gpa":
      return res.json({info: 준비중});
      break;
    default:
      return res.status(400).json({info: "잘못된 요청입니다." });
  }
})

router.get('/detail', async (req, res) => {
  const { movieid } = req.query;
  console.log(movieid);
  const data = await select("select id movieid, is_screening isscreening, movie_title movietitle, opening_date releasedate, rate rating, grade, director, actor, genre, plot story from movie where id = ?", [movieid]);
  data[0].postersrc = "/assets/images/movies/" + data[0].movieid + ".jpg";
  return res.json(data);
})

module.exports = router;