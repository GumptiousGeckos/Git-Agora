SELECT
  users.*, contributions.idea_points, contributions.dev_points
FROM
  users
LEFT JOIN
  ratings
ON
  users.id = contributions.user_id
where
  users.id = ${id}