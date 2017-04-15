INSERT INTO
  projects (id, user_id, title, description, link)
VALUES
  ($1, $2, $3, $4, $5)
RETURNING
  id;