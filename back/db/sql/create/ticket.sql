create table if not exists reservation(
  id                varchar(40),
  user_id           varchar(20)  not null,
  timetable_id      int           not null,
  payment_type      varchar(20)  not null,
  price             int          not null,
  timetable_id      int          not null,
  PRIMARY KEY (id),
  FOREIGN KEY (timetable_id) REFERENCES timetable(id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
);

create table if not exists ticket(
  id                int           auto_increment,
  reservation_id    varchar(40)   not null,
  seat_id           int           not null,
  PRIMARY KEY (id),
  FOREIGN KEY (reservation_id) REFERENCES reservation(id),
  FOREIGN KEY (seat_id) REFERENCES seat(id)
);
