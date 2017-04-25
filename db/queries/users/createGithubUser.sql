INSERT INTO
  users (id, name, username, email, avatar)
SELECT
  ${id}, ${name}, ${username}, ${email}, ${avatar}
ON CONFLICT 
  (id) 
DO UPDATE SET
    email = ${email},
    avatar = ${avatar},
    name = ${name}
RETURNING
  id;
