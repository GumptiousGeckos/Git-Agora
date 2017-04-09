CREATE TABLE IF NOT EXISTS collaborators (
  id SERIAL PRIMARY KEY,
  user_id int,
  topic_id int,
  FOREIGN KEY(user_id) REFERENCES users,
  FOREIGN KEY(topic_id) REFERENCES topics
);