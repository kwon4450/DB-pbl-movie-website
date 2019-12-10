const { select, change } = require("../..");

const trans = async info => {
  const path =
    "../시간표/" +
    info.areaname +
    "/" +
    info.theatername +
    "/" +
    info.date.replace(/-/gi, "");
  console.log(path);
  const timetables = require(path);
  for (const movie of timetables) {
    const movieid = await select(
      "select id from movie where movie_title = ? and opening_date = ?",
      [movie.name, movie.releasedate]
    );
    if (!movieid.length) continue;
    for (const screen of movie.screens) {
      let screenid = await select(
        "select id from screen where theater_id = ? and name = ?",
        [info.theatercode, screen.name.replace(/CGV/gi, "DBV").trim()]
      );
      if (!screenid.length) {
        await change([
          {
            sql:
              "insert into screen(theater_id, name, totalseats) values(?, ?, ?)",
            args: [
              info.theatercode,
              screen.name.replace(/CGV/gi, "DBV").trim(),
              screen.total
            ]
          }
        ]);
        screenid = await select(
          "select id from screen where theater_id = ? and name = ?",
          [info.theatercode, screen.name.replace(/CGV/gi, "DBV").trim()]
        );
      }
      if (!screenid.length) continue;
      const screentype = screen.type;
      for (const timetable of screen.timetables) {
        // console.log(movieid, screenid);
        await change([
          {
            sql:
              "insert into timetable(movie_id, screen_id, screen_type, start_date, start_time) values(?, ?, ?, ?, ?)",
            args: [
              movieid[0].id,
              screenid[0].id,
              screentype,
              info.date,
              timetable.starttime
            ]
          }
        ]);
      }
    }
  }
};

module.exports = { trans };

//select * from theater join screen on theater.id = screen.theater_id join timetable on screen.id = timetable.screen_id where theater.id = 1;
//select id from screen where theater_id = 3 and name = '7관[CGV아트하우스][COMFORT SEAT] 8층';
// select theater.name theatername, screen.name screenname, movie.movie_title, timetable.* from theater join screen on theater.id = screen.theater_id join timetable on screen.id = timetable.screen_id join movie on movie.id = timetable.movie_id where theater.id = 1;
