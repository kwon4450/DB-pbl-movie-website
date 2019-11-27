const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');

const { select } = require('../oracle');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    session: true,
  }, async (id, password, done) => {
    try {
      const sql = `select * from client where id = '${id}' and rownum = 1`;
      const user = await select(sql);
      if (!user) {
        return done(null, false, { reason: '존재하지 않은 아이디이거나 비밀번호가 일치하지 않습니다.' });
      }
      const check = await bcrypt.compare(password, user.password);
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