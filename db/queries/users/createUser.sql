INSERT INTO
  users (id, name, username, email, picture)
SELECT
  ${id}, ${name}, ${username}, ${email}, ${picture}
WHERE NOT EXISTS
  (SELECT 1 FROM
    users
  WHERE
    id = ${id}
  )
