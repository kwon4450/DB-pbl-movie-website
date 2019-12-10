const axios = require('axios');
const cheerio = require('cheerio');
const list = require('./list')
const { change } = require('../../');

const getHtml = async (areacode, theatercode, date) => {
  try {
    let data = [areacode];
    data[1] = await axios.get(`http://www.cgv.co.kr/theaters/?theatercode=${theatercode}&date=${date}`);
    return data
  } catch(e) {
    console.error(e);
  }
};

console.log(list.length)
list.forEach(city => {
  city.theaters.forEach(async theater => {
    date = '20191208'
    const html = await getHtml(city.areacode, theater.theatercode, date)
    const $ = cheerio.load(html[1].data);
        const $info = $("div.wrap-theater").find('div.theater-info');
        const obj = {
          areacode: html[0],
          name: theater.theatername,
          address: cheerio.load($.html($info.find('strong.title')).replace('<br>','\n'))('strong.title').text().replace("위치/주차 안내  >", ''),
          totalscreens: $info.find('span.txt-info > em').eq(1).text().split('/')[0].replace('관', '').trim(),
          totalseats: $info.find('span.txt-info > em').eq(1).text().split('/')[1].replace('석', '').replace(',', '').trim()
        }
        await change([ {sql: "insert into theater(areacode, name, address, totalscreens, totalseats) values(?,?,?,?,?)", args: [obj.areacode, obj.name, obj.address, obj.totalscreens, obj.totalseats]}]);
  });
})


// citycode    varchar(10)       not null,
// name        varchar(20)       not null,
// address     text              not null,
// tele         varchar(20)      not null,
// totalscrees int               not null,
// totalseats  int               not null,