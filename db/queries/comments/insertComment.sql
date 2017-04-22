/* insert comment of a topic */
INSERT INTO
  comments (username, date_created, type, topic_id, content)
VALUES
  (${username}, ${date_created}, ${type}, ${topic_id}, ${content})