const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();

const passportConfig = require('./passport');
const userAPIRouter = require('./routes/api/user');
 
const app = express();

passportConfig();
app.set('port', process.env.PORT || 8008);

const sessionMiddleware = session({
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
  },
});

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(sessionMiddleware);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../front/build')));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userAPIRouter);
app.use('/', (req, res) => {
  res.send('api 서버');
});

app.listen(app.get('port'), () => {
  console.log('server start at: ',app.get('port'));
});