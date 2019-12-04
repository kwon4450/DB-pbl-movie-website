create table if not exists person(
  id            int           auto_increment,
  birthday      date          not null,
  f_name        varchar(20)   not null,
  l_name        varchar(20)   not null,
  gender        varchar(20)   not null,
  job           varchar(20)   not null,
  info          text          not null,
  PRIMARY KEY (id)
);

create table if not exists genretype(
  genre         varchar(20),
  info          text          not null,
  PRIMARY KEY (genre)
);

create table if not exists grade(
  name          varchar(10),
  info          text          not null,
  PRIMARY KEY (name)
);

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

create table if not exists moviegenre(
  id            int           auto_increment,
  movie_id      int           not null,
  genre         varchar(20)   not null,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movie(id),
  FOREIGN KEY (genre) REFERENCES genretype(genre)
);

create table if not exists director(
  id            int           auto_increment,
  movie_id      int           not null,
  person_id     int           not null,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movie(id),
  FOREIGN KEY (person_id) REFERENCES person(id)
);

create table if not exists actor(
  id            int           auto_increment,
  movie_id      int           not null,
  person_id     int           not null,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movie(id),
  FOREIGN KEY (person_id) REFERENCES person(id)
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
