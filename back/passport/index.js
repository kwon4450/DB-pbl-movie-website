const passport = require("passport");
const local = require("./local");

const { select } = require("../db");

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("serialize");
    return done(null, user.user_id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      console.log("deserialize");
      const sql = `select * from user where user_id = ? limit 1`;
      const user = await select(sql, [id]);
      return done(null, user);
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
};
