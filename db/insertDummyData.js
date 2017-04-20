const db = require('./db.js');
const data = require('./dummyData.js');
const pgp = require('pg-promise')();
const path = require('path');
const pg = require('pg');

// This is here because env LOCAL DB not working
// const config = {
//   host: 'localhost',
//   port: 5432,
//   database: 'gecko'
// };

// const db = pgp(config);



function sql(file) {
  var fullPath = path.join(__dirname, './queries', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

// we need slash below?
let queries = {
  addCollaborator: sql('collaborators/addCollaborator.sql'),
  addComment: sql('comments/insertComment.sql'),
  addFavorite: sql('favorites/addFavorite.sql'),
  addFollow: sql('follows/addFollow.sql'),
  addMessage: sql('messages/insertMessage.sql'),
  addRating: sql('ratings/addRatings.sql'),
  addTag: sql('tags/insertTag.sql'),
  addProject: sql('projects/addProject.sql'),
  addProjectTag: sql('projects_tags/addProjectTag.sql'),
  // addArticle: sql('articles/addArticle.sql'),
  addUser: sql('users/createUser.sql'),
  addVote: sql('votes/insertVote.sql')
}



// data.users.forEach( (user) => {
//   const { id, name, username, email, picture } = user;

//   db.any(queries.addUser.query, {id, name, username, email, picture})
//   .then(result => console.log('success entering user', result))
//   .catch(err => console.log('an error entering user into db', err));
// });

// data.projects.forEach( (project) => {
//   const { id, user_id, title, description, link } = project;

//   db.query(queries.addProject, {id, user_id, title, description, link})
//   .then(result => console.log('success entering project', result))
//   .catch(err => console.log('an error entering project into db', err));
// });

// data.tags.forEach( (tag) => {
//   db.query(queries.addTag, [tag.tag_name])
//   .then(result => console.log('success entering tag', result))
//   .catch(err => console.log('an error entering tag into db', err));
// });

data.comments.forEach( (comment) => {
  const { user_id, type, date_created, topic_id, content } = comment;
  db.query(queries.addComment, {user_id, type, date_created, topic_id, content})
  .then(result => console.log('success entering comment', result))
  .catch(err => console.log('an error entering comment into db', err));
});

// data.favorites.forEach( (favorite) => {
//   db.query(queries.addFavorite, [favorite.user_id, favorite.topic_id])
//   .then(result => console.log('success entering favorite', result))
//   .catch(err => console.log('an error entering favorite into db', err));
// });

// data.follows.forEach( (follow) => {
//   db.query(queries.addFollow, [follow.user_id, follow.type, follow.type_id])
//   .then(result => console.log('success entering follow', result))
//   .catch(err => console.log('an error entering follow into db', err));
// });

// data.messages.forEach( (message) => {
//   db.query(queries.addMessage, [message.sender_id, message.receiver_id, message.content])
//   .then(result => console.log('success entering message', result))
//   .catch(err => console.log('an error entering message into db', err));
// });

// data.ratings.forEach( (rating) => {
//   db.query(queries.addRating, [rating.user_id, rating.dev_points, rating.idea_points])
//   .then(result => console.log('success entering rating', result))
//   .catch(err => console.log('an error entering rating into db', err));
// });

// data.projects_tags.forEach( (project_tag) => {
//   db.query(queries.addProjectTag, [project_tag.tag_id, project_tag.project_id])
//   .then(result => console.log('success entering project-tag', result))
//   .catch(err => console.log('an error entering project-tag into db', err));
// });

// data.votes.forEach( (vote) => {
//   db.query(queries.addVote, [vote.user_id, vote.type, vote.topic_id, vote.vote_type])
//   .then(result => console.log('success entering vote', result))
//   .catch(err => console.log('an error entering vote into db', err));
// });

// data.collaborators.forEach( (collaborator) => {
//   db.query(queries.addCollaborator, [collaborator.user_id, collaborator.project_id])
//   .then(result => console.log('success entering collaborator', result))
//   .catch(err => console.log('an error entering collaborator into db', err));
// });