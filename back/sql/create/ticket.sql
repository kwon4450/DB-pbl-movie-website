create table reservation(
  id                varchar(40),
  client_id         varchar(20)  not null,
  payment_type      varchar(20)  not null,
  price             int          not null,
  PRIMARY KEY (id),
  FORIEGN KEY (client_id) REFERENCES client(id)
);

create table ticket(
  id                int,
  reservation_id    varchar(40)   not null,
  seat_id           int           not null,
  PRIMARY KEY (id),
  FORIEGN KEY (reservation_id) REFERENCES reservation(id),
  FORIEGN KEY (seat_id) REFERENCES seat(id)
);
