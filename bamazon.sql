DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;

USE DATABASE bamazondb;

CREATE TABLE products (
item_id INTEGER(20) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(200) NOT NULL,
department_name VARCHAR(200) NOT NULL,
price INTEGER(10) NOT NULL,
stock_quantity INTEGER,
PRIMARY KEY (id),
);

INSERT INTO bamazondb.products (product_name, department_name, price, stock_quantity) VALUES ?
     var values = [
         ['shirt','clothing',17,70],
         ['books','library',15,68],
         ['sandals','clothing',45,43],
         ['nail_polish','beauty',10,35],
         ['shampoo','beauty',4,58],
         ['hair_gel','beauty',6,80],
         ['sweater','clothing',22,25],
         ['purse','clothing',50,52],
         ['necklace','jewlery',75,91],
         ['earrings','jewlery',40,36],
         ['jeans','clothing',50,83],
     ];
)