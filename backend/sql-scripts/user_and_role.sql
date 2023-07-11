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
    role_name VARCHAR(20) NOT NULL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS account_role (
    account_id INTEGER NOT NULL,
    role VARCHAR(20) NOT NULL,
    PRIMARY KEY (account_id,role),
    FOREIGN KEY (account_id) references account(id),
    FOREIGN KEY (role) references role(role_name)
);

