CREATE TABLE IF NOT EXISTS users (
  id serial,
  username varchar(30) UNIQUE,
  password varchar(40) NOT NULL,
  time_joined timestamp DEFAULT current_timestamp,
  email varchar(30) UNIQUE,
  mobile text
);