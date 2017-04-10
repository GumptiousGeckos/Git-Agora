require('dotenv').config()

var path = require('path');
var config = process.env.DATABASE_URL || process.env.DB_LOCAL;

var pgp = require('pg-promise')();
var db = pgp(config);

function sql(file) {
  var fullPath = path.join(__dirname, './tables', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

var queries = {
  drop: sql('dropTables.sql'),
  users: sql('users.sql'),
  topics: sql('topics.sql'),
  comments: sql('comments.sql'),
  collab: sql('collaborators.sql'),
  favorites: sql('favorites.sql'),
  follows: sql('follows.sql'),
  messages: sql('messages.sql'),
  ratings: sql('ratings.sql'),
  tags: sql('tags.sql'),  
  tagsTopics: sql('tags_topics.sql'),
  votes: sql('votes.sql')  
};

db.tx(t => {
  return t.batch(Object.keys(queries).map(k => t.none(queries[k])));
})
  .then(() => {
     console.log('SUCCESS');
     pgp.end(); // to avoid delay exiting the process;
  })
  .catch(error => {
     console.log('ERROR:', error);
     pgp.end(); // to avoid delay exiting the process;
  });
