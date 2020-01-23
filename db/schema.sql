DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    eaten BOOLEAN DEFAULT false
);