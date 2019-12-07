create table if not exists movie(
  id            int           auto_increment,
  grade_name    varchar(10)   not null,
  movie_title   varchar(20)   not null,
  is_screening  TINYINT (1)   not null,
  opening_date  date          not null,
  runnung_time  int(10)       not null,
  thumbnail     varchar(255)  not null,
  country       varchar(20)   not null,
  PRIMARY KEY (id),
  FOREIGN KEY (grade_name) REFERENCES grade(name)
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
