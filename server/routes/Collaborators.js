const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
var pgp = require('pg-promise')();




function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/collaborators', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  addCollaborator: sql('addCollaborator.sql'),
  getCollaborators: sql('getCollaborators.sql')
}


module.exports.getCollaborators = (req, res) => {
  const { topic_id } = req.query;

  return db.query(queries.getCollaborators, [topic_id])
  .then( data => {
    console.log('Success get collaborators');
    res.status(201).json(data);
  })
  .catch( error => {
    res.status(404).send('error getting collaborators', error);
  });
}


module.exports.addCollaborator = (req, res) => {
  const {user_id, topic_id } = req.body;

  return db.query(queries.addCollaborator, [user_id, topic_id])
  .then( () => {
    res.status(202).send('Success adding collaborator');
  })
  .catch( error => {
    res.status(404).send('Failed  adding collaborator');
  });
}