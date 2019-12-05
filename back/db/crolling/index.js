const axios = require('axios');
const cheerio = require('cheerio');

const getHtml = async (theatercode, date) => {
  try {
    return await axios.get(`http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx?theatercode=${theatercode}&date=${date}`);
  } catch(e) {
    console.error(e);
  }
};

getHtml('0001','20191204')
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
        releasedate: $(elem).find('div.info-movie > i').eq(2).text().trim().slice(0,10),
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
        const $timetableList = $(elem).find('div.info-timetable > ul');
        $timetableList.each((k, elem) => {
          res[i].screens[j].timetables[k] = {
            starttime: $(elem).find('li > a').attr('data-playstarttime'),
            endtime: $(elem).find('li > a').attr('data-playendtime'),
          }
        })
      })
    })

    return res;
  })
  .then(res => {
    var fs = require('fs');
    fs.writeFileSync('./test1.json', JSON.stringify(res), 'utf8');
  });