INSERT INTO
<<<<<<< HEAD
  users (id, name, username, email, picture)
SELECT
  ${id}, ${name}, ${username}, ${email}, ${picture}
=======
  users (id, name, username, email, avatar)
SELECT
  ${id}, ${name}, ${username}, ${email}, ${avatar}
>>>>>>> 70408d582e791c519851095694a48329a6f673d0
WHERE NOT EXISTS
  (SELECT 1 FROM
    users
  WHERE
    id = ${id})
RETURNING
  id;
