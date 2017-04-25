SELECT
  *
FROM
  contributions
WHERE
  user_id = ${user_id}
  AND
  STATUS != 'REJECTED'
ORDER BY
  updated_at desc
;