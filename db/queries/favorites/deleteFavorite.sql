DELETE FROM
  favorites
where
  user_id = $1
AND
  topic_id = $2