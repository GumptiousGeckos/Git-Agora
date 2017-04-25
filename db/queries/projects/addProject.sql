INSERT INTO
  projects (id, user_id, title, description, link)
VALUES
  (${projectId}, ${user_id}, ${title}, ${description}, ${link})
RETURNING
  id;