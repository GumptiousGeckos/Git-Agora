/* get vote count for topic */
SELECT
  *
FROM
  votes
where
  type = $1
AND
  topic_id = $2