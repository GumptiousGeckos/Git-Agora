INSERT INTO contributions (
  id, 
  user_id, 
  project_id, 
  owner_id,
  stage, 
  dev_points, 
  idea_points,
  title,
  url,
  updated_at
) VALUES (
  ${id}, 
  ${user_id}, 
  ${project_id}, 
  ${owner_id},
  ${stage}, 
  ${dev_points}, 
  ${idea_points},
  ${title},
  ${url},
  ${updated_at}
)