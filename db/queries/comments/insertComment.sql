/* insert comment of a topic */
INSERT INTO
  comments (user_id, type, topic_id, content)
VALUES
  ($1, $2, $3, $4)