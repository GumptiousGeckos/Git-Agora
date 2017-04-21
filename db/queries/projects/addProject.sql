INSERT INTO
  projects (id, user_id, title, description, link)
VALUES
  (${id}, ${user_id}, ${title}, ${description}, ${link})
RETURNING
  id;