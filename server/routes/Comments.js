const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise')();





function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  getComments: sql('getCommentsByTopicId.sql'),
  insertComment: sql('insertComment.sql')
}


module.exports.getComments = (topic_id) => {
  return db.query(queries.getComments, [topic_id])
  .then(data => {
    return data;
  })
  .catch(error => {
    console.log('error');
  });
}


module.exports.addComment = (user_id, topic_id, content) => {
  return db.query(queries.insertComment, [user_id, topic_id, content])
  .then(() => {

  })
  .catch(error => {
    console.log('error');
  })
}



