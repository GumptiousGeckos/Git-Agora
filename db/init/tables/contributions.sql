CREATE TABLE IF NOT EXISTS contributions (
  id integer PRIMARY KEY,
  user_id integer,
  project_id integer,
  owner_id integer,
  stage text,
  url text,
  title text,
  updated_at date,
  dev_points integer,
  idea_points integer,
  FOREIGN KEY(user_id) REFERENCES users,
  FOREIGN KEY(owner_id) REFERENCES users,
  FOREIGN KEY(project_id) REFERENCES projects 
);