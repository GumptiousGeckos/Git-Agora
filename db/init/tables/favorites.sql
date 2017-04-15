CREATE TABLE IF NOT EXISTS favorites (
  id SERIAL PRIMARY KEY,
  user_id int,
  type text,
  topic_id int,
  FOREIGN KEY(user_id) REFERENCES users
);