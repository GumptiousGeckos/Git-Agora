const config = {
  host: 'localhost',
  port: 5432,
  database: 'gecko'
};

var QueryFile = require('pg-promise').QueryFile;
var pgp = require('pg-promise')();

function sql(file) {
  return new QueryFile(file, {minify: true});
}

var sqlDrop = sql('./tables/dropTables.sql');
var sqlUsers = sql('./tables/users.sql');
var sqlTopics = sql('./tables/topics.sql');
var sqlTags = sql('./tables/tags.sql');
var sqlTagsTopics = sql('./tables/tags_topics.sql');
var sqlVotes = sql('./tables/votes.sql');
var sqlCollab = sql('./tables/collaborators.sql');
var sqlComments = sql('./tables/comments.sql');
var sqlFavorites = sql('./tables/favorites.sql');
var sqlFollows = sql('./tables/follows.sql');
var sqlMessages = sql('./tables/messages.sql');
var sqlRatings = sql('./tables/ratings.sql');

var db = pgp(config);

db.query(sqlDrop)
.then(
  results => {
    return db.query(sqlUsers);
  }
).then(
  results => {
    return db.query(sqlTopics);
  }
).then(
  results => {
    return db.query(sqlComments);
  }
).then(
  results => {
    return db.query(sqlCollab);
  }
).then(
  results => {
    return db.query(sqlFavorites);
  }
).then( 
  results => {
    return db.query(sqlFollows);
  }
).then(
  results => {
    return db.query(sqlMessages);
  }
).then(
  results => {
    return db.query(sqlRatings);
  }
).then(
  results => {
    return db.query(sqlTags);
  }
).then(
  results => {
    return db.query(sqlTagsTopics);
  }
).then(
  results => {
    return db.query(sqlVotes);
  }
)