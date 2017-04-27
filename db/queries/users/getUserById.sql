SELECT
  users.*, ratings.idea_points, ratings.dev_points
FROM
  users
LEFT JOIN
  ratings
ON
  users.id = ratings.user_id
where
  users.id = ${id}