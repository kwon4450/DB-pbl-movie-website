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
  postal        int(5)     not null,
  street        varchar(100)  not null,
  street_num    int(3)     not null,
  detail        text   not null,
  state         varchar(10)  not null,
  city          varchar(10)  not null,
  district      varchar(10)  not null,
  PRIMARY KEY (theater_id),
  FORIEGN KEY (theater_id) REFERENCES theater(id)
);

create table screen(
  id            number        constraint  screen_PK   primary key,
  theater_id    number        not null,
  name          varchar2(20),
  constraint screen_theater_FK foreign key(theater_id) references theater(id)
);

create table seat(
  id            number        constraint  seat_PK   primary key,
  screen_id     number        not null,
  row_index     number(1)     not null,   --배치를 위한
  col_index     number(1)     not null,   --배치를 위한
  row_num       number(2)     not null,
  col_num       number(2)     not null,
  constraint seat_screen_FK foreign key(screen_id) references screen(id)
);

create table timetable(
  id            number        constraint timetable_PK primary key,
  movie_id      number        not null,
  screen_id     number  not null,
  start_time    date          not null,
  constraint timetable_movie_FK foreign key(movie_id) references movie(id),
  constraint timetable_scree_FK foreign key(screen_id) references screen(id)
);
