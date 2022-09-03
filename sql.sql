--creamos la base de datos en postgresql con el nombre de "PruebaBackend"
CREATE DATABASE PruebaBackend;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


--creamos la tabla llamada products con los siguientes campos
-- id
-- name
-- price
-- description

CREATE TABLE products (
    id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    name character varying(50) NOT NULL,
    price integer NOT NULL,
    description character varying(100) NOT NULL
);

--creamos la tabla roles con los siguientes campos
-- id
-- name

CREATE TABLE roles (
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    name character varying(50) NOT NULL
);


--creamos la tabla users con los siguientes campos
-- id
-- name
-- last_name
--document
--roles_id

CREATE TABLE users (
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    document character varying(50) NOT NULL,
    roles_id uuid NOT NULL,
    CONSTRAINT fk_roles FOREIGN KEY (roles_id) REFERENCES roles (id)
);

-- creamos la tabla sales con los siguientes campos
-- id
--qty
--sale_at
--products_id
--users_id

CREATE TABLE sales (
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    qty integer NOT NULL,
    sale_at date NOT NULL,
    products_id uuid NOT NULL,
    users_id uuid NOT NULL,
    CONSTRAINT fk_products FOREIGN KEY (products_id) REFERENCES products (id),
    CONSTRAINT fk_users FOREIGN KEY (users_id) REFERENCES users (id)
);

--insertamos los datos en la tabla products
INSERT INTO products (name, price, description) VALUES ('Arroz', 3000, 'Libra');
INSERT INTO products (name, price, description) VALUES ('Papas', 1000, 'Libra');
INSERT INTO products (name, price, description) VALUES ('Agua sin gas', 2000, '500 ml');
INSERT INTO products (name, price, description) VALUES ('Agua con gas', 2500, '500 ml');
INSERT INTO products (name, price, description) VALUES ('Docena de huevos', 1800, 'ministro de haciendo aprueba');

--insertando roles
INSERT INTO roles (name) VALUES ('admin');
INSERT INTO roles (name) VALUES ('employee');

