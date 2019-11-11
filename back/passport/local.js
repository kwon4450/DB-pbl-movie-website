const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');

const { select } = require('../oracle/query');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    session: true,
  }, async (id, password, done) => {
    try {
      const sql = `select * from users where user_id = '${id}' and rownum = 1`;
      const user = await select(sql);
      console.log(user.user_pw);
      if (!user) {
        return done(null, false, { reason: '1. 존재하지 않은 아이디이거나 비밀번호가 일치하지 않습니다.', x: id, y: password });
      }
      const check = await bcrypt.compare(password, user.user_pw);
      if (check) {
        console.log('login success');
        return done(null, user);
      } else {
        return done(null, false, { reason: '2. 존재하지 않은 아이디이거나 비밀번호가 일치하지 않습니다.', x: id, y: password });
      }
    } catch (e) {
      console.error(e);
      return done(e);
    }
  }));
};