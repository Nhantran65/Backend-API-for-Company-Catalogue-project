-- TODO: tool to nuke the db
USE company_catalogue_api;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE company;
DROP TABLE user;
DROP TABLE story;
DROP TABLE comment;
DROP TABLE tag;
DROP TABLE story_tag;
SET FOREIGN_KEY_CHECKS = 1;