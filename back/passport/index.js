const passport = require('passport');
const local = require('./local');

const { select } = require('../oracle');

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("serialize");
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try{
      console.log("deserialize");
      const sql = `select * from client where id = '${id}' and rownum = 1`;
      const user = await select(sql);
      return done(null, user);
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
}