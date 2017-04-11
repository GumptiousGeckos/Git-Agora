/* get vote count for topic */
SELECT
  COUNT
FROM
  votes
where
  topic_id = $1