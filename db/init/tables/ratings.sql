CREATE TABLE IF NOT EXISTS ratings (
  id SERIAL PRIMARY KEY,
  user_id int,
  dev_points int,
  idea_points int,
  FOREIGN KEY(user_id) REFERENCES users
);