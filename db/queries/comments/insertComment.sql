/* insert comment of a topic */
INSERT INTO
  comments (user_id, date_created, type, topic_id, content)
VALUES
  (${user_id}, ${date_created}, ${type}, ${topic_id}, ${content})