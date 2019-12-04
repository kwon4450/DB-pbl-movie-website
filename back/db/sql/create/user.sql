create table if not exists user(
  user_id           varchar(20),
  user_pw           varchar(255)  not null,
  mail              varchar(40)   not null,    
  gender 	          varchar(10)   not null, 
  class	            varchar(10)  	not null,
  f_name	          varchar(10)  	not null,
  l_name            varchar(10)	  not null,
  PRIMARY KEY (user_id)
);

create table if not exists phone(
  phone_num         varchar(20),
  user_id           varchar(20)   not null,
  PRIMARY KEY (phone_num),
  FOREIGN KEY (user_id) REFERENCES user (user_id)
);

create table if not exists class(
  name              varchar(20),
  discount_rate     int          not null,
  PRIMARY KEY (name)
);

create table if not exists userclass(
  user_id           varchar(20),
  class_name        varchar(20)    not null,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_id)  REFERENCES  user(user_id),
  FOREIGN KEY (class_name) REFERENCES  class(name)
);

create table if not exists cardinfo(
  id            int,
  user_id     varchar(20) not null,
  company       varchar(20) not null,
  card1         int(4),
  card2         int(4),
  card3         int(4),
  card4         varchar(255),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
);
