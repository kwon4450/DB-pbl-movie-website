create table person(
  id            int,
  birthday      date          not null,
  f_name        varchar(20)   not null,
  l_name        varchar(20)   not null,
  gender        varchar(20)   not null,
  job           varchar(20)   not null,
  info          text          not null,
  PRIMARY KEY (id)
);

create table genretype(
  genre         varchar(20),
  info          text          not null,
  PRIMARY KEY (genre)
);

create table grade(
  name          varchar(10),
  info          text          not null,
  PRIMARY KEY (name)
);

create table movie(
  id            int,
  grade_name    varchar(10)   not null,
  movie_title   varchar(20)   not null,
  ??is_screening  varchar(1)        constraint  boolean_ckeck  check(is_screening in ('0', '1')),
  opening_date  date          not null,
  runnung_time  int(10)       not null,
  ??thumbnail     varchar(255)  not null,
  country       varchar(20)   not null,
  PRIMARY KEY (id),
  FORIEGN KEY (grade_name) REFERENCES grade(name)
);

create table moviegenre(
  id            int,
  movie_id      int           not null,
  genre         varchar(20)   not null,
  PRIMARY KEY (id),
  FORIEGN KEY (movie_id) REFERENCES movie(id),
  FORIEGN KEY (genre) REFERENCES genretype(genre)
);

create table director(
  id            int,
  movie_id      int   not null,
  person_id     int   not null,
  PRIMARY KEY (id),
  FORIEGN KEY (movie_id) REFERENCES movie(id),
  FORIEGN KEY (person_id) REFERENCES person(id)
);

create table actor(
  id            int,
  movie_id      int   not null,
  person_id     int   not null,
  PRIMARY KEY (id),
  FORIEGN KEY (movie_id) REFERENCES movie(id),
  FORIEGN KEY (person_id) REFERENCES person(id)
);

create table review(
  id            int,
  movie_id      int           not null,
  rating        int           not null,
  content       text          not null,
  client_id     varchar(20)   not null,
  PRIMARY KEY (id),
  FORIEGN KEY (movie_id) REFERENCES movie(id),
  FORIEGN KEY (client_id) REFERENCES client(id)
);

create table wishlist(
  id            int,
  client_id     varchar(20)   not null,
  movie_id      int           not null,
  PRIMARY KEY (id),
  FORIEGN KEY (client_id) REFERENCES client(id),
  FORIEGN KEY (movie_id) REFERENCES movie(id)
);
