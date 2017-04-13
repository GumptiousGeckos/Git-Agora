CREATE TABLE IF NOT EXISTS users (
  id integer PRIMARY KEY,
  username varchar(30) UNIQUE,
  created_at timestamp DEFAULT current_timestamp,
  email varchar(30) UNIQUE,
  mobile text
);