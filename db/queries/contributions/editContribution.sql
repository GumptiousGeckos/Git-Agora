UPDATE 
  contributions
SET
  stage = ${stage},
  dev_points = ${dev_points},
  idea_points = ${idea_points},
  updated_at = ${updated_at}
WHERE
  id = ${id}
;