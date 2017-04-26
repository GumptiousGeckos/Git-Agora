SELECT
  contributions.*, users.username
FROM
  contributions
LEFT JOIN
  USERS
ON 
  contributions.user_id = users.id
WHERE
  contributions.project_id = ${project_id}
  AND
  contributions.STAGE != 'REJECTED'
ORDER BY
  updated_at desc
LIMIT 10
;