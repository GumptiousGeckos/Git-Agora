/* get all comments by topic Id */
SELECT
  *
FROM
  comments
where
  type = ${type}
AND
  topic_id = ${topic_id}

