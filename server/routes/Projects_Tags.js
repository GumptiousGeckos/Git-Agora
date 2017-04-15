const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise')();



function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/projects_tags', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  getProjectsByTag: sql('getProjectsByTag.sql'),
  addProjectTag: sql('addProjectTag.sql')
}


module.exports.getProjectsByTag = (req, res) => {
  const { tag_id } = req.query;

  return db.query(queries.getProjectsByTag, [tag_id])
  .then( data => {
    console.log('Success getting topics by tag');
    res.status(200).json(data);
  })
  .catch( error => {
    res.status(404).send(error, 'FAILED getting topics by tag');
  });
}


module.exports.addProjectTag = (req, res) => {
  const { tag_id, project_id } = req.body;

  return db.query(queries.addProjectTag, [tag_id, project_id])
  .then(() => {
    res.status(201).send('Success adding topic tag');
  })
  .catch( error => {
    res.status(404).send('failed to add topic tag');
  })
}



