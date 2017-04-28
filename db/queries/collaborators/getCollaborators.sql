SELECT
  user_id, users.username
FROM
  collaborators, users
where
  project_id = ${id}
AND
  user_id = users.id