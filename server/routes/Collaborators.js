const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
var pgp = require('pg-promise')();




function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  addCollaborator: sql('addCollaborator.sql'),
  getCollaborators: sql('getCollaborators.sql')
}


module.exports.addCollaborator = (user_id, topic_id) => {
  return db.query(queries.addCollaborator, [user_id, topic_id]);
  // .then(data => {
  //   return data;
  // })
  // .catch(error => {
  //   console.log('error');
  // });
}

module.exports.getCollaborators = (topic_id) => {
  return db.query(queries.getCollaborators, [topic_id]);
  // .then(data => {
  //   return data;
  // })
  // .catch(error => {
  //   console.log('error');
  // });
}