create table if not exists movie(
  id            int           auto_increment,
  movie_title   varchar(20)   not null,
  is_screening  TINYINT (1)   not null,
  opening_date  date          not null,
  runnung_time  int(10)       not null,
  director      varchar(40)   not null,
  actor         varchar(40)   not null,
  grade         varchar(20)   not null,
  genre         varchar(20)   not null,
  plot          text          not null,
  PRIMARY KEY (id),
);

create table if not exists review(
  id            int           auto_increment,
  movie_id      int           not null,
  rating        int           not null,
  content       text          not null,
  user_id     varchar(20)   not null,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movie(id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
);

create table if not exists wishlist(
  id            int           auto_increment,
  user_id     varchar(20)   not null,
  movie_id      int           not null,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(user_id),
  FOREIGN KEY (movie_id) REFERENCES movie(id)
);
