/* delete by username*/
SELECT
  *
FROM
  users
where
  username = $1