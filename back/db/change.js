const pool = require("./pool");

const change = async rows => {
  try {
    const connection = await pool.getConnection(async conn => conn);
    if (!Array.isArray(rows))
      throw { name: "TypeError", message: "parameter's type is not array." };
    try {
      await connection.beginTransaction();
      rows.forEach(async row => {
        // console.log(connection.format(row.sql, row.args));
        await connection.query(row.sql, row.args);
      });
      await connection.commit();
      connection.release();
      return true;
    } catch (e) {
      console.error(e);
      await connection.rollback();
      connection.release();
      return false;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

module.exports = change;
