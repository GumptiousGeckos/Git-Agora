CREATE TABLE IF NOT EXISTS users (
  id integer PRIMARY KEY,
  name varchar(30),
  username varchar(30) UNIQUE,
  description text,
  created_at timestamp DEFAULT current_timestamp,
  email varchar(30) UNIQUE,
  mobile text,
<<<<<<< HEAD
  picture text
=======
  avatar text
>>>>>>> 70408d582e791c519851095694a48329a6f673d0
);