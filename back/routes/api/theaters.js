const express = require('express');
const { select, change } = require('../../oracle');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const data = await select(`select theateraddress.*, theater.name from theater, theateraddress where theater.id = theateraddress.theater_id`);
  return res.json(data);
});

router.get('/screens', async (req, res, next) => {
  const { theater } = req.query;
  const data = await select(`select * from screen where theater_id = ${theater}`);
  
  return res.json(data);
});

router.get('/seats', async (req, res, next) => {
  const { screen } = req.query;
  const temp = await select(`select * from seat where screen_id = ${screen}`);
  var data = new Array();
  for (i = 0; i < temp.length; i++) {
    seat_id = temp[i].id;
    row_i = temp[i].row_index;
    col_i = temp[i].col_index;
    row = temp[i].row_num;
    col = temp[i].col_num;
    index = -1;
    for (j = 0; j < data.length; j++) {
      if (data[j]['row_i'] == row_i && data[j]['col_i'] == col_i) {
        index = j;
        break;
      }
    }
    if (index == -1) {
      var obj = new Object();
      obj['row_i'] = row_i;
      obj['col_i'] = col_i;
      obj['seats'] = new Array();
      data.push(obj);
      index = data.length-1;
    }
    var obj = new Object();
    obj['id'] = seat_id;
    obj["row"] = row;
    obj["col"] = col;
    obj["full"] = false;
    data[index]['seats'].push(obj);
  }

  return res.json(data);
});

module.exports = router;