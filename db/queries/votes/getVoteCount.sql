/* get vote count for topic */
SELECT
  *
FROM
  votes
where
  topic_id = $1