CREATE DATABASE blog_database;

USE blog_database;

CREATE TABLE blogs(
	id int PRIMARY KEY AUTO_INCREMENT,
	title varchar(250),
	description text,
	author varchar(100),
	image varchar(250),
	createdDate datetime
);

CREATE TABLE clients(
	id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(250),
	email varchar(250),
	subject varchar(250),
	description text,
	createdDate datetime
);


INSERT INTO blogs (title, description, author, image, createdDate)
VALUES 
('The Future of AI', 'An in-depth look at the advancements in artificial intelligence and its potential impact on society.', 'John Doe', 'https://via.placeholder.com/250x150.png?text=AI+Future', '2024-10-01 12:34:56'),
('Healthy Eating Habits', 'Tips and tricks for maintaining a healthy diet and lifestyle in the modern world.', 'Jane Smith', 'https://via.placeholder.com/250x150.png?text=Healthy+Eating', '2024-09-25 08:20:00'),
('Traveling on a Budget', 'A comprehensive guide to exploring the world without breaking the bank.', 'Chris Johnson', 'https://via.placeholder.com/250x150.png?text=Budget+Travel', '2024-09-20 10:00:30'),
('Top 10 Coding Practices', 'A list of the best coding practices every developer should follow.', 'Alice Cooper', 'https://via.placeholder.com/250x150.png?text=Coding+Practices', '2024-09-15 14:45:15'),
('The Art of Photography', 'Discover the techniques used by professional photographers to capture stunning images.', 'Michael Brown', 'https://via.placeholder.com/250x150.png?text=Photography+Art', '2024-09-05 16:10:45'),
('Mental Health Awareness', 'Raising awareness about mental health and the importance of seeking help when needed.', 'Samantha White', 'https://via.placeholder.com/250x150.png?text=Mental+Health', '2024-09-01 09:15:00'),
('Sustainable Living Tips', 'Practical advice for leading a more sustainable and environmentally friendly life.', 'David Green', 'https://via.placeholder.com/250x150.png?text=Sustainable+Living', '2024-08-28 11:25:30'),
('Introduction to Blockchain', 'A beginner\'s guide to understanding blockchain technology and its applications.', 'Emily Turner', 'https://via.placeholder.com/250x150.png?text=Blockchain+Intro', '2024-08-20 13:45:50'),
('Mastering Remote Work', 'Strategies and tips to stay productive while working remotely.', 'Daniel Scott', 'https://via.placeholder.com/250x150.png?text=Remote+Work', '2024-08-15 17:05:40'),
('Fitness for Beginners', 'A step-by-step guide to getting started with fitness and building a workout routine.', 'Sarah Taylor', 'https://via.placeholder.com/250x150.png?text=Fitness+Beginners', '2024-08-10 07:30:20');