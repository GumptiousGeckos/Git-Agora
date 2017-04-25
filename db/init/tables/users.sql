CREATE TABLE IF NOT EXISTS users (
  id integer PRIMARY KEY UNIQUE,
  name varchar(30),
  username varchar(30) UNIQUE,
  description text,
  created_at timestamp DEFAULT current_timestamp,
  email varchar(30),
  mobile text,
  avatar text
);