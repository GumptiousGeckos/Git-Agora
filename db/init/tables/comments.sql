CREATE TABLE IF NOT EXISTS comments (
  id serial PRIMARY KEY,
  username varchar(30),
  date_created text,
  type text,
  topic_id int,
  content text
);