-- TODO: tool to migrate the db

-- Create DB
CREATE DATABASE IF NOT EXISTS company_catalogue_api;
USE company_catalogue_api;

-- Create tables
CREATE TABLE IF NOT EXISTS company (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    location VARCHAR(255),
    website VARCHAR(255),
    logo VARCHAR(255),
    industry VARCHAR(255),
    established DATE,
    other_details TEXT,

    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role ENUM('intern', 'alumnus', 'admin'),
    profile_picture TEXT,
    bio TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS story (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    company_id INT NOT NULL,
    user_id INT NOT NULL,
    title VARCHAR(300),
    content TEXT,
    posted DATETIME,
    likes INT DEFAULT 0,
    status ENUM('pending', 'published'),

    PRIMARY KEY (id),

    FOREIGN KEY (company_id)
    REFERENCES company (id)
    ON UPDATE CASCADE ON DELETE CASCADE,

    FOREIGN KEY (user_id)
    REFERENCES user (id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comment (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    story_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT,
    date_posted DATETIME,

    PRIMARY KEY (id),

    FOREIGN KEY (story_id)
    REFERENCES story (id)
    ON UPDATE CASCADE ON DELETE CASCADE,

    FOREIGN KEY (user_id)
    REFERENCES user (id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS tag (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    name VARCHAR(100),

    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS story_tag (
    story_id INT NOT NULL,
    tag_id INT NOT NULL,

    FOREIGN KEY (story_id)
    REFERENCES story (id)
    ON UPDATE CASCADE ON DELETE CASCADE,

    FOREIGN KEY (tag_id)
    REFERENCES tag (id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
