const { select, change } = require("..");

const transTheater = async (info) => {
  await change([{ sql: "insert into theater(areacode, name, address, totalscreens, totalseats) values(?, ?, ?, ?, ?)", args: [info.areacode, info.theatername, info.address, info.totalscreens, info.totalseats]}]);
  console.log("here");
  const theaterid = await select("select id from theater where name = ?", [info.theatername]);
  const querys = []
  for (const screen of info.screenList) {
    querys.push({
      sql: "insert into screen(theater_id, name, totalseats) values(?, ?, ?)",
      args: [theaterid[0].id, screen.screenname, screen.totalseats]
    })
  }
  console.log(querys);
  await change(querys);
  for (const screen of info.screenList) {
    console.log(screen.screenname)
    const screenid = await select("select id from screen where theater_id = ? and name = ?", [theaterid[0].id, screen.screenname]);
    let seatquerys = [];
    const n = screen.totalseats;
    console.log(screenid, n);
    if (n > 200) {
      let rangei = parseInt(n / 24);
      for (let i = 1; i <= rangei + 1; i++) {
        let ridx = i > parseInt(rangei / 2) ? 2 : 1;
        let rangej = n >= i * 24 ? 24 : n % 24;
        for (let j = 1; j <= rangej; j++) {
          let cidx = j >= 21 ? 3 : j >= 5 ? 2 : 1;
          seatquerys.push({
            sql:
              "insert into seat(screen_id, row_index, col_index, row_num, col_num) values(?, ?, ?, ?, ?)",
            args: [screenid[0].id, ridx, cidx, i, j]
          });
        }
      }
    } else if (n > 140) {
      let rangei = parseInt(n / 18);
      for (let i = 1; i <= rangei + 1; i++) {
        let rangej = n >= i * 18 ? 18 : n % 18;
        for (let j = 1; j <= rangej; j++) {
          let cidx = j >= 15 ? 3 : j >= 5 ? 2 : 1;
          seatquerys.push({
            sql:
              "insert into seat(screen_id, row_index, col_index, row_num, col_num) values(?, ?, ?, ?, ?)",
            args: [screenid[0].id, 1, cidx, i, j]
          });
        }
      }
    } else if (n > 70) {
      let rangei = parseInt(n / 10);
      for (let i = 1; i <= rangei + 1; i++) {
        let rangej = n >= i * 10 ? 10 : n % 10;
        for (let j = 1; j <= rangej; j++) {
          let cidx = j >= 9 ? 3 : j >= 3 ? 2 : 1;
          seatquerys.push({
            sql:
              "insert into seat(screen_id, row_index, col_index, row_num, col_num) values(?, ?, ?, ?, ?)",
            args: [screenid[0].id, 1, cidx, i, j]
          });
        }
      }
    } else if (n > 29) {
      if (n % 2) {
        const ratio = parseInt(Math.sqrt(n));
        for (let i = 0; i < n; i++) {
          seatquerys.push({
            sql:
              "insert into seat(screen_id, row_index, col_index, row_num, col_num)\
                                values(?, ?, ?, ?, ?)",
            args: [screenid[0].id, 1, 1, parseInt(i / ratio) + 1, (i % ratio) + 1]
          });
        }
      } else {
        for (let i = 0; i < n; i++) {
          seatquerys.push({
            sql:
              "insert into seat(screen_id, row_index, col_index, row_num, col_num)\
                                values(?, ?, ?, ?, ?)",
            args: [
              screenid[0].id,
              1,
              i % 6 > 2 ? 2 : 1,
              parseInt(i / 6) + 1,
              (i % 6) + 1
            ]
          });
        }
      }
    } else {
      for (let i = 0; i < n; i++) {
        seatquerys.push({
          sql:
            "insert into seat(screen_id, row_index, col_index, row_num, col_num)\
                              values(?, ?, ?, ?, ?)",
          args: [
            screenid[0].id,
            1,
            i % 4 > 1 ? 2 : 1,
            parseInt(i / 4) + 1,
            (i % 4) + 1
          ]
        });
      }
    }
    // // console.log(seatquerys)
    await change(seatquerys);
  }
}

module.exports = transTheater