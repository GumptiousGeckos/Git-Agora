CREATE TABLE IF NOT EXISTS votes (
  id SERIAL PRIMARY KEY,
  user_id int,
  type text,
  topic_id int,
  vote_type int,
  FOREIGN KEY(user_id) references users
);