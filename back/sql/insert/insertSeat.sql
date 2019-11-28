insert into theater(id, name) values(theaterAI.nextval, '안산');

insert into theateraddress(theater_id, postal, street, street_num, detail, state, city, district) values(theateraddressAI.nextval, 15462, '광덕대로', 194, '고잔동, NC백화점 A관 6층', '경기도', '안산시', '단원구');

-- 1관, 7관 --
insert into screen(id, theater_id, name) values(screenAI.nextval, (select id from theater where name='안산'), '1관');

declare
  r_idx  number	:=  1;
  c_idx  number	:=  1;
begin
  for y in 1..13 loop
    for x in 1..18 loop
      if (x=1 and y=1) or ((x=13 or x=14) and y=13) then continue;
      end if;
      
      if x >= 15 then c_idx := 3;
      elsif x >= 5 then c_idx := 2;
      else c_idx := 1;
      end if;
      if y <= 5 then r_idx := 1;
      else r_idx := 2;
      end if;
      
      insert into seat(id, screen_id, row_index, col_index, row_num, col_num) values(seatAI.nextval, (select id from screen where name='1관'), r_idx, c_idx, y, x);
    end loop;
  end loop;
end;
/

-- 2관, 6관 --
insert into screen(id, theater_id, name) values(screenAI.nextval, (select id from theater where name='안산'), '2관');

declare
  c_idx  number  :=  1;
begin
  for y in 1..13 loop
    for x in 1..16 loop
      if (y <= 11 and x <= 3) or (x=4 and y=1) or (x=1 and y=13) or ((x=12 or x=13) and y=13) or (x=16 and y=13) then continue;
      end if;

      if x >=15 then c_idx := 3;
      elsif x >= 5 then c_idx := 2;
      else c_idx := 1;
      end if;

      insert into seat(id, screen_id, row_index, col_index, row_num, col_num) values(seatAI.nextval, (select id from screen where name='2관'), 1, c_idx, y, x);
    end loop;
  end loop;
end;
/

-- 3관, 5관--
insert into screen(id, theater_id, name) values(screenAI.nextval, (select id from theater where name='안산'), '3관');

declare
  r_idx  number	:=  1;
  c_idx  number :=  1;
begin
  for y in 1..13 loop
    for x in 1..18 loop
      if (x=1 and (y=2 or y=8)) or ((x=13 or x=14) and y=13) or (x=18 and y=1) then continue;
      end if;
      
      if x >= 15 then c_idx := 3;
      elsif x >= 5 then c_idx := 2;
      else c_idx := 1;
      end if;
      if y <= 5 then r_idx := 1;
      else r_idx := 2;
      end if;
      
      insert into seat(id, screen_id, row_index, col_index, row_num, col_num) values(seatAI.nextval, (select id from screen where name='3관'), r_idx, c_idx, y, x);
    end loop;
  end loop;
end;
/

-- 4DX 관 --
insert into screen(id, theater_id, name) values(screenAI.nextval, (select id from theater where name='안산'), '4DX관');

declare
  c_idx  number :=  1;
begin
  for y in 1..11 loop
    for x in 1..12 loop
      if x >= 9 then c_idx := 2;
      else c_idx := 1;
      end if;
      
      insert into seat(id, screen_id, row_index, col_index, row_num, col_num) values(seatAI.nextval, (select id from screen where name='4DX관'), 1, c_idx, y, x);
    end loop;
  end loop;
end;
/

-- 8관 --
insert into screen(id, theater_id, name) values(screenAI.nextval, (select id from theater where name='안산'), '8관');

declare
  c_idx  number	:=  1;
begin
  for y in 1..13 loop
    for x in 1..16 loop
      if (x=13 and y=1) or ((x=12 or x=13) and y=13) or (x>=14 and y<=10) then continue;
      end if;
      
      if x >= 14 then c_idx := 3;
      elsif x >= 4 then c_idx := 2;
      else c_idx := 1;
      end if;
      
      insert into seat(id, screen_id, row_index, col_index, row_num, col_num) values(seatAI.nextval, (select id from screen where name='8관'), 1, c_idx, y, x);
    end loop;
  end loop;
end;
/
