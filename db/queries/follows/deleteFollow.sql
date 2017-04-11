DELETE FROM
  follows
where
  user_id = $1
AND
  type_id = $2