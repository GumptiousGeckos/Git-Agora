const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise')();



function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/topics', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  addTopic: sql('insertTopic.sql'),
}


module.exports.addTopic = (req, res) => {
  const { user_id, title, description, link, type } = req.body;

  return db.query(queries.addTopic, [user_id, title, description, link, type])
  .then( () => {
    res.status(201).send('Success adding topic');
  })
  .catch( error => {
    res.status(404).send('failed to add topic');
  })
}


