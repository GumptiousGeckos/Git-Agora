CREATE TABLE IF NOT EXISTS topics (
  id serial PRIMARY KEY,
  user_id int,
  title varchar(40),
  description text,
  link text,
  type text,
  created_at timestamp DEFAULT current_timestamp,
  FOREIGN KEY(user_id) REFERENCES users
);