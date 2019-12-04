insert into theater values('안산');

insert into theateraddress(theater_id, postal, street, street_num, detail, state, city, district) values(theateraddressAI.nextval, 15462, '광덕대로', 194, '고잔동, NC백화점 A관 6층', '경기도', '안산시', '단원구');

insert into screen(id, theater_id, name) values(screenAI.nextval, (select id from theater where name='안산'), '1관');

