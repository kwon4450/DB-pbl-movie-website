const list = require('./list');
const {change} = require('../..');


const setAreacode = async () => {
  let querys = []

  for (const one of list) {
    querys.push({
      sql: "insert into area(areacode, areaname) values(?, ?)",
      args: [one.areacode, one.areaname]
    })
  }

  await change(querys);
}

setAreacode();
