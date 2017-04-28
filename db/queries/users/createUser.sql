INSERT INTO
  users (id, name, username, email, avatar)
SELECT
  ${id}, ${name}, ${username}, ${email}, ${avatar}
ON CONFLICT 
  (id)
DO UPDATE SET
  id = ${id}
RETURNING
  id;