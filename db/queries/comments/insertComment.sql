/* insert comment of a topic */
INSERT INTO
  comments (user_id, topic_id, content)
VALUES
  ($1, $2, $3)