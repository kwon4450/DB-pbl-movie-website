const pool = require("./pool");

const select = async (sql, args) => {
  try {
    const connection = await pool.getConnection(async conn => conn);
    try {
      const [rows] = await connection.query(sql, args);
      // console.log(connection.format(sql, args));
      connection.release();
      return rows;
    } catch (e) {
      console.error(e);
      connection.release();
      return false;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

module.exports = select;
