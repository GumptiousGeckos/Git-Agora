INSERT INTO contributions (
  id, 
  user_id, 
  project_id, 
  owner_id, 
  stage, 
  dev_points, 
  idea_points,
  updated_at
) VALUES (
  ${id}, 
  ${user_id}, 
  ${project_id}, 
  ${owner_id}, 
  ${stage}, 
  ${dev_points}, 
  ${idea_points},
  ${updated_at}
)