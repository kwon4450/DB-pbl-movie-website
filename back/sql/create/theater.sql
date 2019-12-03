create table theater(
  id    int,
  name  varchar(20) not null,
  PRIMARY KEY (id)
);

create table favoritetheater(
  id          int,
  client_id   varchar(20) not null,
  theater_id  int         not null,
  PRIMARY KEY (id),
  FORIEGN KEY (client_id) REFERENCES client(id),
  FORIEGN KEY (theater_id) REFERENCES theater(id)
);

create table theateraddress(
  theater_id    int,
  postal        int(5)        not null,
  street        varchar(100)  not null,
  street_num    int(3)        not null,
  detail        text          not null,
  state         varchar(10)   not null,
  city          varchar(10)   not null,
  district      varchar(10)   not null,
  PRIMARY KEY (theater_id),
  FORIEGN KEY (theater_id) REFERENCES theater(id)
);

create table screen(
  id            int,
  theater_id    int         not null,
  name          varchar(20) not null,
  PRIMARY KEY (id),
  FORIEGN KEY (theater_id) REFERENCES theater(id)
);

create table seat(
  id            int,
  screen_id     int        not null,
  row_index     int(1)     not null,   --배치를 위한
  col_index     int(1)     not null,   --배치를 위한
  row_num       int(2)     not null,
  col_num       int(2)     not null,
  PRIMARY KEY (id),
  FORIEGN KEY (screen_id) REFERENCES screen(id)
);

create table timetable(
  id            int,
  movie_id      int   not null,
  screen_id     int   not null,
  start_time    date  not null,
  PRIMARY KEY (id),
  FORIEGN KEY (movie_id) REFERENCES movie(id),
  FORIEGN KEY (screen_id) REFERENCES screen(id)
);
