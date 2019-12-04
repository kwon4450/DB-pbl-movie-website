insert into theater values('안산');

insert into theateraddress values(15462, '광덕대로', 194, '고잔동, NC백화점 A관 6층', '경기도', '안산시', '단원구');

insert into screen values((select id from theater where name='안산'), '1관');

