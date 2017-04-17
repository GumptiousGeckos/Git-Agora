CREATE TABLE IF NOT EXISTS contributions (
  id PRIMARY KEY integer,
  user_id integer,
  project_id integer,
  owner_id integer,
  type text,
  FOREIGN KEY(user_id, owner_id) REFERENCES users,
  FOREIGN KEY(project_id) REFERENCES projects 
)