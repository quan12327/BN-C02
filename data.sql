CREATE DATABASE blogpage; 
 
USE blogpage;

CREATE TABLE blogs( 
 id int PRIMARY KEY AUTO_INCREMENT, 
 name varchar(250), 
 author varchar(250),
 description varchar(250),
 img varchar(250),
 createdDate datetime 
)

INSERT INTO blogs (name, author, description, img, createdDate)  
VALUES('Smartphone', 'a', 'Latest model with high-end specs','1.jpg', NOW()),
('laptop', 'b', 'Latest model with high-end specs','2.jpg', NOW()),
('PC', 'c', 'Latest model with high-end specs','3.jpg', NOW())