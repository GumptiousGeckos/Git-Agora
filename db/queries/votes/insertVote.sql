/* insert vote */
INSERT INTO
  votes (user_id, type, topic_id, vote_type)
VALUES
  (${user_id}, ${type}, ${topic_id}, ${vote_type})
