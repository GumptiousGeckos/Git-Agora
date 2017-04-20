CREATE TABLE IF NOT EXISTS comments (
  id serial PRIMARY KEY,
  user_id int,
  date_created text,
  type text,
  topic_id int,
  content text,
  FOREIGN KEY(user_id) REFERENCES users
);