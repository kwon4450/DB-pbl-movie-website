insert into theater(citycode,name,address,tle) values('0211','안산','~','1');

insert into screen(id,name) values((select id from theater where name='안산'), '1관');

