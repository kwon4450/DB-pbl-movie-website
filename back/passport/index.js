const passport = require('passport');
const local = require('./local');

const { select } = require('../oracle/query');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser(async (id, done) => {
    try{
      const sql = `select firstrow(*) from users where user_id = '${id}'`;
      const user = await select(sql);
      console.log(user);
      return done(null, user);
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
}