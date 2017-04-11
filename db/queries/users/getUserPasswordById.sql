/* get user password by username */
SELECT
  password
FROM
  users
where
  username = $1