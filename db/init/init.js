require('dotenv').config();

const config = process.env.DATABASE_URL || process.env.DB_LOCAL;

const path = require('path');
const pgp = require('pg-promise')();

const db = pgp(config);

const sql = (file) => {
  const fullPath = path.join(__dirname, './tables', file);
  return new pgp.QueryFile(fullPath, { minify: true });
};

const queries = {
  drop: sql('dropTables.sql'),
  users: sql('users.sql'),
  projects: sql('projects.sql'),
  comments: sql('comments.sql'),
  collab: sql('collaborators.sql'),
  favorites: sql('favorites.sql'),
  follows: sql('follows.sql'),
  messages: sql('messages.sql'),
  ratings: sql('ratings.sql'),
  tags: sql('tags.sql'),
  articles: sql('articles.sql'),
  projectTags: sql('projects_tags.sql'),
  votes: sql('votes.sql'),
  sessions: sql('sessions.sql'),
  contributions: sql('contributions.sql')
};

db.tx((t) => {
  return t.batch(Object.keys(queries).map(k => t.none(queries[k])));
})
.then(() => {
  console.log('SUCCESS');
  pgp.end(); // to avoid delay exiting the process;
})
.catch((error) => {
  console.log('ERROR Here:', error);
  pgp.end(); // to avoid delay exiting the process;
});
