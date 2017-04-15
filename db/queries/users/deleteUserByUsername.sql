/* delete by user Id */
DELETE FROM
  users
where
  username = $1