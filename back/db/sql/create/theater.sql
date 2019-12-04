create table if not exists theater(
  id          int               auto_increment,
  citycode    varchar(10)       not null,
  name        varchar(20)       not null,
  PRIMARY KEY (id)
);

create table if not exists favoritetheater(
  id          int,
  user_id     varchar(20)       not null,
  theater_id  int               not null,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(user_id),
  FOREIGN KEY (theater_id) REFERENCES theater(id)
);

create table if not exists theateraddress(
  theater_id    int,
  postal        int(5)          not null,
  street        varchar(100)    not null,
  street_num    int(3)          not null,
  detail        text            not null,
  state         varchar(10)     not null,
  city          varchar(10)     not null,
  district      varchar(10)     not null,
  PRIMARY KEY (theater_id),
  FOREIGN KEY (theater_id) REFERENCES theater(id)
);

create table if not exists screen(
  id            int             auto_increment,
  theater_id    int             not null,
  name          varchar(20)     not null,
  PRIMARY KEY (id),
  FOREIGN KEY (theater_id) REFERENCES theater(id)
);

create table if not exists seat(
  id            int             auto_increment,
  screen_id     int             not null,
  row_index     int(1)          not null,
  col_index     int(1)          not null,
  row_num       int(2)          not null,
  col_num       int(2)          not null,
  PRIMARY KEY (id),
  FOREIGN KEY (screen_id) REFERENCES screen(id)
);

create table if not exists timetable(
  id            int             auto_increment,
  movie_id      int             not null,
  screen_id     int             not null,
  start_time    date            not null,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movie(id),
  FOREIGN KEY (screen_id) REFERENCES screen(id)
);
