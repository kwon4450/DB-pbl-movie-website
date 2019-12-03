create table client(
  id            varchar(20), -- 불변
  password      varchar(255)  not null,
  mail          varchar(40)   not null,    
  gender 	      varchar(10)   not null, 
  class	        varchar(10)  	not null,
  f_name	      varchar(10)  	not null,
  l_name        varchar(10)	  not null,
  PRIMARY KEY (id)
);

create table phone(
  phone_num     varchar(20),
  client_id     varchar(20)   not null,
  PRIMARY KEY (phone_num),
  FORIEGN KEY (client_id) REFERENCES client(id)
);

create table class(
  name            varchar(20),
  discount_rate   int          not null,
  PRIMARY KEY (name)
);

create table clientclass(
  client_id     varchar(20),
  class_name    varchar(20)    not null,
  PRIMARY KEY (client_id),
  FORIEGN KEY (client_id)  REFERENCES  client(id),
  FORIEGN KEY (class_name) REFERENCES  class(name)
);

create table cardinfo(
  id            int,
  client_id     varchar(20) not null,
  company       varchar(20) not null,
  card1         int(4),
  card2         int(4),
  card3         int(4),
  card4         varchar(255),
  PRIMARY KEY (id),
  FORIEGN KEY (client_id) REFERENCES client(id)
);
