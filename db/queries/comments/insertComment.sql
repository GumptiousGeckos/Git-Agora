/* insert comment of a topic */
INSERT INTO
  comments (user_id, type, topic_id, content)
VALUES
  (${user_id}, ${type}, ${topic_id}, ${content})