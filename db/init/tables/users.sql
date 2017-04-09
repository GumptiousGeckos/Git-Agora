CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  username varchar(30) UNIQUE,
  password varchar(40) NOT NULL,
  created_at timestamp DEFAULT current_timestamp,
  email varchar(30) UNIQUE,
  mobile text
);