const oracledb = require('oracledb');
const config = require('../config/config')['test'];

oracledb.autoCommit = true;

exports.select = async (sql) => {
  try {
    connection = await oracledb.getConnection({
      user          : config.user,
      password      : config.password,
      connectString : config.connectString
    });
    const result = await connection.execute(sql);
    var col = result.metaData;
    var rows = result.rows;
    var data = new Array();
    for (var i = 0; i < rows.length; i++) {
      var temp = new Object();
      for (var j = 0; j < col.length; j++) {
        temp[col[j].name.toLowerCase()] = rows[i][j];
      }
      data.push(temp);
    }
    if (data.length <= 1) return data[0];
    return data;
  } catch(err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.log(err);
      }
    }
  }
};

exports.change = async (sql) => {
  try {
    connection = await oracledb.getConnection({
      user          : config.user,
      password      : config.password,
      connectString : config.connectString
    });
    await connection.execute(sql);
  } catch(err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.log(err);
      }
    }
  }
}