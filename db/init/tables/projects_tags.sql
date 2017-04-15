CREATE TABLE IF NOT EXISTS projects_tags (
  id SERIAL PRIMARY KEY,
  tag_id int,
  project_id int,
  FOREIGN KEY(tag_id) REFERENCES tags,
  FOREIGN KEY(project_id) REFERENCES projects
);