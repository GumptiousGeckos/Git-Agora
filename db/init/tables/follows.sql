CREATE TABLE IF NOT EXISTS follows (
  id SERIAL PRIMARY KEY,
  user_id int,
  type text,
  type_id int,
  FOREIGN KEY(user_id) REFERENCES users
);