const list = require('./list');

res = []

list.forEach((city, i) => {
  res[i] = ({
    areacode: city.RegionCode,
    areaname: city.RegionName,
    theaters: []
  })
  city.AreaTheaterDetailList.forEach((screen, j) => {
    res[i].theaters[j] = ({
      theatercode: screen.TheaterCode,
      theatername: screen.TheaterName.replace(/CGV/gi, "DBV")
    })
  })
});
const fs = require('fs');
fs.writeFileSync('./test2.json', JSON.stringify(res), 'utf8');