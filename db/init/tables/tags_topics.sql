CREATE TABLE IF NOT EXISTS tags_topics (
  id SERIAL PRIMARY KEY,
  tag_id int,
  topic_id int,
  FOREIGN KEY(tag_id) REFERENCES tags,
  FOREIGN KEY(topic_id) REFERENCES topics
);