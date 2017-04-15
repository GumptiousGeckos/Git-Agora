/* get vote from user_id */
SELECT
  *
FROM
  votes
WHERE
  user_id = $1
AND
  topic_id = $2