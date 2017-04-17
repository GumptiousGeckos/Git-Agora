CREATE TABLE IF NOT EXISTS contributions (
  id PRIMARY KEY integer,
  user_id integer,
  project_id integer,
  FOREIGN KEY(user_id) REFERENCES users,
  FOREIGN KEY(projet_id) REFERENCES projects 
)