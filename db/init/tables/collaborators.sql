CREATE TABLE IF NOT EXISTS collaborators (
  id SERIAL PRIMARY KEY,
  user_id int,
  project_id int,
  FOREIGN KEY(user_id) REFERENCES users,
  FOREIGN KEY(project_id) REFERENCES projects
);