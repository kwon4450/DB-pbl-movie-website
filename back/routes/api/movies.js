const express = require("express");
const { select, change } = require("../../db");

const router = express.Router();

router.get("/", async (req, res) => {
  const { num } = req.query;
  console.log(num);
  let movies = await select(
    "select id movieid, is_screening isscreening, movie_title movietitle, opening_date releasedate, runnung_time runningtime, rate rating, grade, director, actor, genre, plot story from movie order by rate desc limit ?",
    [parseInt(num)]
  );
  for (const movie of movies) {
    const rating = await select(
      "select avg(rating) mga from review where movie_id = ?",
      [movie.movieid]
    );
    console.log(rating);
    if (rating[0].mga !== null) {
      movie.mga = rating[0].mga;
    } else {
      movie.mga = 0;
    }
  }
  return res.json(movies);
});

router.get("/detail", async (req, res) => {
  const { movieid } = req.query;
  console.log(movieid);
  const data = await select(
    "select id movieid, is_screening isscreening, movie_title movietitle, opening_date releasedate, runnung_time runningtime, rate rating, grade, director, actor, genre, plot story from movie where id = ?",
    [movieid]
  );
  data[0].postersrc = "/assets/images/movies/" + data[0].movieid + ".jpg";
  const rating = await select(
    "select avg(rating) mga from review where movie_id = ?",
    [movieid]
  );
  if (rating[0].mga !== null) {
    console.log(rating);
    data[0].mga = rating[0].mga;
  } else {
    data[0].mga = 0;
  }
  return res.json(data);
});

// 제목, 장르, 등급
router.post("/search", async (req, res) => {
  const { title, genre, grade } = req.body;
  let sql =
    "select id movieid, is_screening isscreening, movie_title movietitle, opening_date releasedate, runnung_time runningtime, rate rating, grade, director, actor, genre, plot story from movie where movie_title like ? and (";
  let args = ["%" + title + "%"];
  if (!genre.length) {
    sql += "genre like ?) and (";
    args.push("%%");
  } else {
    for (let i = 0; i < genre.length - 1; i++) {
      sql += "genre like ? or ";
      args.push("%" + genre[i] + "%");
    }
    sql += "genre like ?) and (";
    args.push("%" + genre[genre.length - 1] + "%");
  }
  if (!grade.length) {
    sql += "grade like ?)";
    args.push("%%");
  } else {
    for (let i = 0; i < grade.length - 1; i++) {
      sql += "grade like ? or ";
      args.push("%" + grade[i] + "%");
    }
    sql += "grade like ?)";
    args.push("%" + grade[grade.length - 1] + "%");
  }
  console.log(sql, args);
  const data = await select(sql, args);
  return res.json(data);
});

module.exports = router;
