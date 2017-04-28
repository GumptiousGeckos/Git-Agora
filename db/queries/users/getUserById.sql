SELECT
  userinfo.*, contr.idea_points, contr.dev_points
FROM
  (
    SELECT
      *
    FROM
      users
    WHERE
      users.id = ${id}
  ) userinfo
LEFT JOIN
  (
    SELECT
      sum(idea_points) idea_points,
      sum(dev_points) dev_points,
      contributions.user_id
    FROM
      contributions
    WHERE
      contributions.user_id = ${id}
    GROUP BY
      contributions.user_id
  ) contr
ON
  userinfo.id = contr.user_id
;