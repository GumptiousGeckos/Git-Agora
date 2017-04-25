SELECT
  points.*,
  users.username
FROM
  (
    SELECT
      sum(contributions.dev_points) dev_points,
      user_id
    FROM
      contributions
    WHERE
      project_id = ${project_id}
    GROUP BY
      user_id
  ) points
LEFT JOIN
  users
ON
  users.id = points.user_id
ORDER BY
  points.dev_points desc
;