const config = {
  host: 'localhost',
  port: 5432,
  database: 'gecko'
};

var pgp = require('pg-promise')();
var db = pgp(config);
var path = require('path');

function sql(file) {
  var fullPath = path.join(__dirname, './tables', file)
  // console.log(fullPath);
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

db.tx( t => {
  return t.batch(Object.keys(queries).map(k => t.query(queries[k])));
})
.then( () => {
  console.log('success');
  pgp.end();
})
.catch( error => {
  console.log('error', error );
  pgp.end();
})
// var sqlDrop = sql('./tables/dropTables.sql');
// var sqlUsers = sql('./tables/users.sql');
// var sqlTopics = sql('./tables/topics.sql');
// var sqlTags = sql('./tables/tags.sql');
// var sqlTagsTopics = sql('./tables/tags_topics.sql');
// var sqlVotes = sql('./tables/votes.sql');
// var sqlCollab = sql('./tables/collaborators.sql');
// var sqlComments = sql('./tables/comments.sql');
// var sqlFavorites = sql('./tables/favorites.sql');
// var sqlFollows = sql('./tables/follows.sql');
// var sqlMessages = sql('./tables/messages.sql');
// var sqlRatings = sql('./tables/ratings.sql');

// db.query(sqlDrop)
// .then(
//   results => {
//     return db.query(sqlUsers);
//   }
// ).then(
//   results => {
//     return db.query(sqlTopics);
//   }
// ).then(
//   results => {
//     return db.query(sqlComments);
//   }
// ).then(
//   results => {
//     return db.query(sqlCollab);
//   }
// ).then(
//   results => {
//     return db.query(sqlFavorites);
//   }
// ).then( 
//   results => {
//     return db.query(sqlFollows);
//   }
// ).then(
//   results => {
//     return db.query(sqlMessages);
//   }
// ).then(
//   results => {
//     return db.query(sqlRatings);
//   }
// ).then(
//   results => {
//     return db.query(sqlTags);
//   }
// ).then(
//   results => {
//     return db.query(sqlTagsTopics);
//   }
// ).then(
//   results => {
//     return db.query(sqlVotes);
//   }
// ).then(
//   results => {
//     console.log('SUCCESS!')
//     return pgp.end();
//   }
// ).catch(
//   error => {
//     console.log('ERROR', error)
//     return pgp.end();
//   }
// )
