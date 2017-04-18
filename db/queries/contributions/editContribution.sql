UPDATE 
  contributions
SET
  stage = ${stage},
  dev_points = ${dev_points},
  idea_points = ${idea_points}
WHERE
  id = ${id}
;