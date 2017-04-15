CREATE TABLE IF NOT EXISTS projects (
  id integer PRIMARY KEY,
  user_id integer,
  title varchar(40),
  description text,
  link text,
  created_at timestamp DEFAULT current_timestamp,
  FOREIGN KEY(user_id) REFERENCES users
);