SELECT
  *
FROM
  contributions
WHERE
  user_id = ${user_id}
  AND
  STAGE != 'REJECTED'
ORDER BY
  updated_at desc
;