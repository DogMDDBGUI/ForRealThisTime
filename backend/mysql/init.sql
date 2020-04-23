DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL auto_increment,
  `email` varchar(50),
  `password` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `role_id` int,
  `zipcode` int,
  `imageURL` varchar(200),
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `role_name` varchar(50),
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `dog`;

CREATE TABLE `dog` (
  `id` int NOT NULL,
  `breed_id`int,
  `owner_id` int,
  `name` varchar(50),
  `age` int,
  `gender` varchar(50),
  `conditions` varchar(400),
  `imageURL` varchar(200),
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `breed`;

CREATE TABLE `breed` (
  `id` int NOT NULL,
  `name` varchar(50),
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `dogOwner`;

CREATE TABLE `dogOwner` (
  `user_id` int,
  `vet_id` int 
);


DROP TABLE IF EXISTS `veterinarian`;

CREATE TABLE `veterinarian` (
  `user_id` int NOT NULL,
  `years_experience` int,
  `area_id` int,
  `skills` varchar(400),
  `ratings` double
);

DROP TABLE IF EXISTS `appointment`;

CREATE TABLE `appointment` (
 `id` int NOT NULL,
  time time NOT NULL,
  date date NOT NULL,
  `dog_id` int NOT NULL,
  `status` varchar(100) NOT NULL,
  `vet_id` int NOT NULL
);

/*ALTER USER 'root'@'localhost' IDENTIFIED BY ''; */

/*
-- create table in DB
CREATE TABLE `db`.`test_table` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `value` VARCHAR(45), 
    PRIMARY KEY (`id`), 
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

-- insert sample entry
INSERT INTO `db`.`test_table` (`value`) VALUES ('Sample Value');

-- create user called `manager` with password `Password`
CREATE USER 'manager'@'%' IDENTIFIED BY 'Password';

-- give access to manager on db
GRANT ALL PRIVILEGES ON db.* TO 'manager'@'%';

-- set password method to native password for mysql workbench access (mysql 8 issue)
ALTER USER 'manager'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'Password';

-- flush them privileges
FLUSH PRIVILEGES;
*/
