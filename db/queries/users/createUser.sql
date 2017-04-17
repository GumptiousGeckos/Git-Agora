/* create user */
INSERT INTO
  users (id, name, username, email, picture)
VALUES
  ($1, $2, $3, $4, $5)
