const { change } = require("..");

const transMovie = async (info) => {
  // console.log(info)
  await change([{
    sql: "insert into movie(movie_title, is_screening, opening_date, runnung_time, director, actor, grade, genre, plot, rate) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    args: [info.movie_title, info.is_screening, info.opening_date, info.running_time, info.director, info.actor, info.grade, info.genre, info.plot, info.rate]
  }]);
}

module.exports = transMovie;