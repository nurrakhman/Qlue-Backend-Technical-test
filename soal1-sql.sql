CREATE DATABASE gameStore;

create table persons(
  id integer primary key,
  name varchar(200)
); 

create table items(
  id integer primary key,
  name varchar(200),
  price varchar(10)
);

create table transactions(
  id integer primary key,
  person_id integer,
  item_id integer,
  total integer,
  date timestamp,
  FOREIGN KEY(person_id) REFERENCES persons(id),
  FOREIGN KEY(item_id) REFERENCES items(id)
);

insert into persons (id,name)
values
	(1,'Nurrakhman'),
	(2,'Dwinanda'),
	(3,'Wahyudi');
	
insert into items (id,name,price)
values
	(1,'Persona 5', 600000),
	(2,'Super Mario 64', 300000),
	(3,'Final Fantasy 7', 200000);

insert into transactions (id, person_id, item_id, total, date)
values
	(1, 1, 1, 2, '2022-01-01'),
	(2, 1, 2, 1, '2022-01-01'),
	(3, 1, 3, 4, '2022-02-01'),
	(4, 2, 1, 5, '2022-02-01'),
	(5, 2, 2, 5, '2022-03-01'),
	(6, 3, 3, 1, '2022-04-01');

-------------------------------------------------------------------------------------------------------------------

-- No.1 
select p."name", sum(t.total * cast(i.price as integer)) as total_price  
from transactions t join items i on t.item_id = i.id join persons p on t.person_id = p.id 
group by p."name";

-- No.2
select sum(t.total * cast(i.price AS integer)) as "total",
	TO_CHAR(t."date", 'Month') as "Month",
	EXTRACT(YEAR FROM t."date") as "Year"
from transactions t join items i on t.item_id = i.id 
group by "Month", "Year", t.date order by "Year", EXTRACT(month FROM t."date");

-- No.3
select p."name" from transactions t join items i on t.item_id = i.id 
join persons p on t.person_id = p.id group by p."name" order by count(t.*) desc;