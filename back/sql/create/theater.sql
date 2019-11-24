create table theater(
  id            number        constraint  theater_PK  primary key,
  name          varchar2(20)  not null
);

create table favoritetheater(
  id            number        constraint favoritetheater_PK  primary key,
  client_id     varchar2(20)  not null,
  theater_id    number        not null,
  constraint favoritetheater_client_FK foreign key(client_id) references client(id),
  constraint favoritetheater_theater_FK foreign key(theater_id) references theater(id)
);

create table theateraddress(
  theater_id    number        constraint theateraddress_PK primary key,
  postal        number(5)     not null,
  street        varchar2(100)  not null,
  street_num    number(3)     not null,
  detail        varchar(255)   not null,
  state         varchar2(10)  not null,
  city          varchar2(10)  not null,
  district      varchar2(10)  not null,
  constraint theateraddress_thater_FK foreign key(theater_id) references theater(id)
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