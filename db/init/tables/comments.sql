CREATE TABLE IF NOT EXISTS comments (
  id serial PRIMARY KEY,
  user_id int,
  created_at timestamp DEFAULT current_timestamp,
  topic_id int,
  content text,
  FOREIGN KEY(user_id) REFERENCES users,
  FOREIGN KEY(topic_id) REFERENCES topics
);