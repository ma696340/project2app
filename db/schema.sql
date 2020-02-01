DROP DATABASE IF EXISTS recipes_db;
CREATE DATABASE recipes_db;
USE recipes_db;

/* Create database */

/* Create table */

CREATE TABLE recipe (
	recipe_id INT NOT NULL AUTO_INCREMENT, 
    recipe_name VARCHAR(255) NOT NULL, 
    recipe_ingredients VARCHAR(255) NOT NULL,
    prep_time INTEGER(50),
    cook_time INTEGER(50),
    recipe_instructions VARCHAR(255) NOT NULL,
    
    PRIMARY KEY (recipe_id)


);
