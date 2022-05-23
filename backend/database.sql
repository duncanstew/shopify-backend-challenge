DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS warehouses;


CREATE TABLE items(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    quantity INTEGER NOT NULL,
    price NUMERIC NOT NULL,
    fk_warehouse INTEGER REFERENCES warehouses(w_id)
);

ALTER TABLE items ADD CONSTRAINT fk_warehouse FOREIGN KEY (fk_warehouse) REFERENCES warehouses(w_id);

CREATE TABLE warehouses(
    w_id SERIAL PRIMARY KEY,
    name VARCHAR UNIQUE NOT NULL,
    city VARCHAR NOT NULL,
    state VARCHAR NOT NULL
);

INSERT INTO warehouses(name, city, state)
VALUES('Warehouse 1', 'New York', 'NY'),
('Warehouse 2', 'Los Angeles', 'CA'),
('Warehouse 3', 'Chicago', 'IL'),
('Warehouse 4', 'Houston', 'TX'),
('Warehouse 5', 'Philadelphia', 'PA');

INSERT INTO items(name, quantity, price)
VALUES('Apple', 10, 1.00),
('Orange', 5, 0.50),
('Banana', 20, 0.75);
