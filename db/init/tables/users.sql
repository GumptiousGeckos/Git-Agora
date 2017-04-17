CREATE TABLE IF NOT EXISTS users (
  id integer PRIMARY KEY,
  name varchar(30) UNIQUE,
  username varchar(30) UNIQUE,
  created_at timestamp DEFAULT current_timestamp,
  email varchar(30) UNIQUE,
  mobile text,
  picture text
);