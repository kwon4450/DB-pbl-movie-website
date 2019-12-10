const { trans } = require('./trans');
const { select } = require('../..');

const test = async (date) => {
  const theaters = await select("select area.areacode, areaname, id theatercode, name theatername from theater inner join area on theater.areacode = area.areacode order by area.areacode");
  for (const theater of theaters) {
    const info = {
      areacode: theater.areacode,
      areaname: theater.areaname,
      theatercode: theater.theatercode,
      theatername: theater.theatername,
      date: date
    }
    await trans(info);
  }
}

test('2019-12-13');
