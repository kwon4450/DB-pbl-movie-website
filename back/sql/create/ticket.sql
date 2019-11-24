create table reservation(
  id                varchar2(40)  constraint reservation_PK primary key,
  client_id         varchar2(20)  not null,
  payment_type      varchar2(20)  not null,
  price             number not null,
  constraint reservation_client_FK foreign key(client_id) references client(id)
);

create table ticket(
  id                number        constraint ticket_id primary key,
  reservation_id    varchar2(40)  not null,
  seat_id           number        not null,
  constraint ticket_reservation_FK foreign key(reservation_id) references reservation(id),
  constraint ticket_seat_FK foreign key(seat_id) references seat(id)
);