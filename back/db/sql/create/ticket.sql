create table if not exists reservation(
  id                varchar(40)  auto_increment,
  user_id           varchar(20)  not null,
  payment_type      varchar(20)  not null,
  price             int          not null,
  timetable_id      int          not null,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(user_id),
  FOREIGN KEY (timetable_id) REFERENCES timetable(id)
);

create table if not exists ticket(
  id                int,
  reservation_id    varchar(40)   not null,
  seat_id           int           not null,
  PRIMARY KEY (id),
  FOREIGN KEY (reservation_id) REFERENCES reservation(id),
  FOREIGN KEY (seat_id) REFERENCES seat(id)
);
