const { select, change } = require("../");

const transfer = async (info, json) => {
  const timetables = json;
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

module.exports = { transfer };


