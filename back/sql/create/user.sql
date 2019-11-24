create table client(
  id            varchar2(20)    constraint  client_PK  primary key, -- 불변
  password      varchar2(255)	  not null,
  mail          varchar2(40)    not null,    
  gender 	      varchar2(10)    not null, 
  class	        varchar2(10)  	not null,
  f_name	      varchar2(10)  	not null,
  l_name        varchar2(10)	  not null
);

create table phone(
  phone_num     varchar2(20)    constraint  phone_PK  primary key,
  client_id     varchar(20)     not null,
  constraint phone_client_FK foreign key(client_id) references client(id)
);

create table class(
  name            varchar2(20)    constraint class_PK    primary key,
  discount_rate   number          not null
);

create table clientclass(
  client_id     varchar2(20)    constraint  clientclass_PK  primary key,
  class_name    varchar2(20)    not null,
  constraint clientclass_client_FK  foreign key(client_id)  references  client(id),
  constraint clientclass_class_FK  foreign key(class_name) references  class(name)
);

create table cardinfo(
  id            number  constraint cardinfo_PK primary key,
  client_id     varchar2(20) not null,
  company       varchar2(20) not null,
  card1         number(4),
  card2         number(4),
  card3         number(4),
  card4         varchar(255),
  constraint card_client_FK foreign key(client_id) references client(id)
);