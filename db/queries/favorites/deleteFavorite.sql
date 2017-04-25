DELETE FROM
  favorites
where
  user_id = ${user_id}
AND
  type = ${type}
AND
  favorite_id = ${favorite_id}
