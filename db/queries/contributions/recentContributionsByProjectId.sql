SELECT
  *
FROM
  contributions
WHERE
  project_id = ${project_id}
  AND
  STATUS != 'REJECTED'
ORDER BY
  updated_at desc
;