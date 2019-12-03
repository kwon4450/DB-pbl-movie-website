create table person(
  id            int,
  birthday      date          not null,
  f_name        varchar(20)   not null,
  l_name        varchar(20)   not null,
  gender        varchar(20)   not null,
  job           varchar(20)   not null,
  info          varchar(255)  not null,
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
  id            int         constraint  movie_PK  primary key,
  grade_name    varchar(10)   not null,
  movie_title   varchar(20)   not null,
  is_screening  varchar(1)        constraint  boolean_ckeck  check(is_screening in ('0', '1')),
  opening_date  date           not null,
  runnung_time  int(10)     not null,
  thumbnail     varchar(255)  not null,
  country       varchar(20)   not null,
  constraint movie_grade_FK foreign key (grade_name) references grade(name)
);

create table moviegenre(
  id            number         constraint  moviegenre_PK  primary key,
  movie_id      number         not null,
  genre         varchar2(20)   not null,
  constraint moviegenre_genretype_FK foreign key (movie_id) references movie(id),
  constraint moviegenre_movie_FK foreign key (genre) references genretype(genre)
);

create table director(
  id            number         constraint  director_PK  primary key,
  movie_id      number         not null,
  person_id     number         not null,
  constraint director_movie_FK foreign key(movie_id) references movie(id),
  constraint director_person_FK foreign key(person_id) references person(id)
);

create table actor(
  id            number         constraint  actor_PK  primary key,
  movie_id      number         not null,
  person_id     number         not null,
  constraint actor_movie_FK foreign key(movie_id) references movie(id),
  constraint actor_person_FK foreign key(person_id) references person(id)
);

create table review(
  id            number         constraint review_PK primary key,
  movie_id      number         not null,
  rating        number         not null,
  content       varchar2(1000) not null,
  client_id     varchar2(20)   not null,
  constraint review_movie_FK foreign key(movie_id) references movie(id),
  constraint review_client_FK foreign key(client_id) references client(id)
);

create table wishlist(
  id            number         constraint wishlist_PK primary key,
  client_id     varchar2(20)   not null,
  movie_id      number         not null,
  constraint wishlist_client_FK foreign key(client_id) references client(id),
  constraint wishlist_movie_FK foreign key(movie_id) references movie(id)
);
