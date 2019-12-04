const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');

const { select } = require('../db');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    session: true,
  }, async (id, password, done) => {
    try {
      const sql = `select * from user where user_id = ? limit 1`;
      const user = await select(sql, id);
      if (!user) {
        return done(null, false, { reason: '존재하지 않은 아이디이거나 비밀번호가 일치하지 않습니다.' });
      }
      const check = await bcrypt.compare(password, user.user_pw);
      if (check) {
        console.log('login success');
        return done(null, user);
      } else {
        return done(null, false, { reason: '존재하지 않은 아이디이거나 비밀번호가 일치하지 않습니다.' });
      }
    } catch (e) {
      console.error(e);
      return done(e);
    }
  }));
};