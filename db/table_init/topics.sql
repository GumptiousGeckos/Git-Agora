CREATE TABLE IF NOT EXISTS topics (
  id serial,
  user_id int,
  title varchar(40),
  description text,
  link text,
  type text,
  FOREIGN KEY(user_id) REFERENCES users(id)
);