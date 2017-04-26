SELECT
  *
FROM
  favorites
WHERE
  user_id = ${user_id}
and
  type = ${type}
and
  favorite_id = ${favorite_id}