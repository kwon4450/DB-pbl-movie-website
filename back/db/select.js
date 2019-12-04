const pool = require('./pool');

const select = async (sql, args) => {
  try {
    const connection = await pool.getConnection(async conn => conn);
    try {
      console.log(connection.format(sql, args));
      const [rows] = await connection.query(sql, args);
      connection.release();
      if (rows.length == 1) return rows[0];
      return rows;
    } catch(e) {
      console.error(e);
      connection.release();
      return false;
    }
  } catch(e) {
    console.error(e);
    return false;
  }
}

module.exports = select;