INSERT INTO
  users (id, name, username, email, avatar)
SELECT
  ${id}, ${name}, ${username}, ${email}, ${avatar}
WHERE NOT EXISTS
  (SELECT 1 FROM
    users
  WHERE
    id = ${id})
RETURNING
  id;
