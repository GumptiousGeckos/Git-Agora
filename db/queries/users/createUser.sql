/* create user */
INSERT INTO
  users (username, password, email, mobile)
VALUES
  ($1, $2, $3, $4)
