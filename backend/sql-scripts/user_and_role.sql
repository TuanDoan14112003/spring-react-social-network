CREATE TABLE IF NOT EXISTS account (
    id serial PRIMARY KEY,
    email VARCHAR(320) UNIQUE NOT NULL,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(80) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    dob DATE,
    active BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS role (
    user_id INTEGER NOT NULL,
    role VARCHAR(20) NOT NULL
);