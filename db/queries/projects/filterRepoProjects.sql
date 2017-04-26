SELECT
  id
FROM
  projects
WHERE
  id in ${repos}
;
