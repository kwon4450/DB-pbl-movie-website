const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const mkdirp = require('mkdirp-promise');
const list = require('./list');

const getHtml = async (theatercode, date) => {
  try {
    return await axios.get(`http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx?theatercode=${theatercode}&date=${date}`);
  } catch (e) {
    console.error(e);
  }
};
list.forEach(city => {
  city.theaters.forEach(theater => {
    let date = '20191214';
    getHtml(theater.theatercode, date)
      .then(html => {
        let res = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div.sect-showtimes > ul").children('li');
        $bodyList.each((i, elem) => {
          res[i] = {
            name: $(elem).find('div.info-movie > a > strong').text().trim(),
            grade: $(elem).find('div.info-movie > span.ico-grade').text().trim(),
            genre: $(elem).find('div.info-movie > i').eq(0).text().trim(),
            runningtime: $(elem).find('div.info-movie > i').eq(1).text().trim(),
            releasedate: $(elem).find('div.info-movie > i').eq(2).text().trim().slice(0, 10),
            screens: []
          }
          const $screenList = $(elem).find('div.type-hall');
          $screenList.each((j, elem) => {
            res[i].screens[j] = {
              name: $(elem).find('div.info-hall > ul > li').eq(1).text().trim(),
              type: $(elem).find('div.info-hall > ul > li').eq(0).text().trim(),
              total: $(elem).find('div.info-hall > ul > li').eq(2).text().replace(/총/gi, "").replace(/석/gi, "").trim(),
              timetables: []
            }
            const $timetableList = $(elem).find('div.info-timetable > ul').children('li');
            $timetableList.each((k, elem) => {
              res[i].screens[j].timetables[k] = {
                starttime: $(elem).find('li > a > em').text().replace(/:/gi, "")
              }
            })
          })
        })
        return res;
      })
      .then(res => {
        mkdirp(`../시간표/${city.areaname}/${theater.theatername}/`)
          .then(() => {
            fs.writeFileSync(`../시간표/${city.areaname}/${theater.theatername}/${date}.json`, JSON.stringify(res), 'utf8');
            console.log(`${date}_${theater.theatername}.json`);
          })
          .catch(() => {
            fs.writeFileSync(`../시간표/${city.areaname}/${theater.theatername}/${date}.json`, JSON.stringify(res), 'utf8');
            console.log(`${date}_${theater.theatername}.json`);
          })
      });
  })
})