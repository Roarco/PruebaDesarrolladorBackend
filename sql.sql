--creamos la base de datos en postgresql con el nombre de "PruebaBackend"
CREATE DATABASE PruebaBackend;

--creamos la tabla llamada products con los siguientes campos
-- id
-- name
-- price
-- description

CREATE TABLE products (
    id serial PRIMARY KEY,
    name character varying(50) NOT NULL,
    price integer NOT NULL,
    description character varying(100) NOT NULL
);

--creamos la tabla roles con los siguientes campos
-- id
-- name

CREATE TABLE roles (
    id serial PRIMARY KEY,
    name character varying(50) NOT NULL
);


--creamos la tabla users con los siguientes campos
-- id
-- name
-- last_name
--document
--roles_id

CREATE TABLE users (
    id serial PRIMARY KEY,
    name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    document character varying(50) NOT NULL,
    roles_id integer NOT NULL,
    CONSTRAINT fk_roles FOREIGN KEY (roles_id) REFERENCES roles (id)
);

-- creamos la tabla sales con los siguientes campos
-- id
--qty
--sale_at
--products_id
--users_id

CREATE TABLE sales (
    id serial PRIMARY KEY,
    qty integer NOT NULL,
    sale_at date NOT NULL,
    products_id integer NOT NULL,
    users_id integer NOT NULL,
    CONSTRAINT fk_products FOREIGN KEY (products_id) REFERENCES products (id),
    CONSTRAINT fk_users FOREIGN KEY (users_id) REFERENCES users (id)
);