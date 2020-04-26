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

INSERT INTO users (id, email, password, first_name, last_name, role_id, zipcode, imageURL) VALUES
(1, 'example1@gmail.com', 'password', 'Joe', 'Brown', 1, 75205, 'picURL1'),
(2, 'example2@gmail.com', 'password', 'Susan', 'Williams', 2, 75205, 'picURL2'),
(3, 'example3@gmail.com', 'password', 'Alexa', 'Field', 2, 75205, 'picURL3'),
(4, 'example4@gmail.com', 'password', 'Derek', 'Shepherd', 1, 75205, 'picURL4'),
(5, 'example5@gmail.com', 'password', 'Shannon', 'Decker', 2, 75205, 'picURL5'),
(6, 'example6@gmail.com', 'password', 'Dudley', 'Darrow', 1, 75205, 'picURL6');


DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `role_name` varchar(50),
  PRIMARY KEY (`id`)
);

INSERT INTO roles (id, role_name) VALUES
(1, 'Veterinarian'),
(2, 'Dog Owner');


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

INSERT INTO dog (id, breed_id, owner_id, name, age, gender, conditions, imageURL) VALUES
(1, 2, 2, 'Max', 3, 'male', 'heart problems', 'imageURL1'),
(2, 8, 3, 'Cookie', 5, 'female', 'overweight', 'imageURL2'),
(3, 3, 5, 'Buckley', 1, 'male', 'overweight', 'imageURL3'),
(4, 6, 5, 'Penne', 4, 'female', 'pregnant', 'imageURL4');

DROP TABLE IF EXISTS `breed`;

CREATE TABLE `breed` (
  `id` int NOT NULL,
  `name` varchar(50),
  PRIMARY KEY (`id`)
);

INSERT INTO breed (id, name) VALUES
(1, 'Labrador Retriever'),
(2, 'Chihuahua'),
(3, 'Beagle'),
(4, 'German Ghepherd'),
(5, 'Bulldog'),
(6, 'Golden Retriever'),
(7, 'Poodle'),
(8, 'King Charles Spaniel'),
(9, 'Pug'),
(10, 'Great Dane');

DROP TABLE IF EXISTS `dogOwner`;

CREATE TABLE `dogOwner` (
  `user_id` int,
  `vet_id` int 
);

INSERT INTO dogOwner (user_id, vet_id) VALUES
(2, 1),
(3, 4),
(5, 6);

DROP TABLE IF EXISTS `veterinarian`;

CREATE TABLE `veterinarian` (
  `user_id` int NOT NULL,
  `years_experience` int,
  `area_id` int,
  `skills` varchar(400),
  `ratings` double
);

INSERT INTO veterinarian (user_id, years_experience, area_id, skills, ratings) VALUES
(1, 4, 3, 'Skills1', 8),
(4, 15, 1, 'Skills2', 9),
(6, 7, 5, 'SKills3', 6);

DROP TABLE IF EXISTS `appointment`;

CREATE TABLE `appointment` (
 `id` int NOT NULL auto_increment,
  time time NOT NULL,
  date date NOT NULL,
  `dog_id` int NOT NULL,
  `status` varchar(100) NOT NULL,
  `vet_id` int NOT NULL
);

INSERT INTO appointment(id, time, date, dog_id, status, vet_id) VALUES
(1, '10:00:00', '2020-05-13', 1, 'BOOKED', 1),
(2, '15:00:00', '2020-05-07', 2, 'CANCELLED', 6),
(3, '08:30:00', '2020-06-13', 4, 'BOOKED', 6);


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
