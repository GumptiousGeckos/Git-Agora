const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise')();



function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/projects', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  getAllProjects: sql('getAllProjects.sql'),
  addProject: sql('addProject.sql')
}


module.exports.getAllProjects = (req, res) => {

  return db.query(queries.getAllProjects)
  .then( (data) => {
    console.log('Success getting all projects');
    res.status(200).json(data);
  })
  .catch( error => {
    res.status(404).send('failed to get all projects');
  })
}

module.exports.addProject = (req, res) => {
  const { user_id, title, description, link } = req.body;

  return db.query(queries.addProject, [user_id, title, description, link])
  .then( () => {
    res.status(201).send('Success adding project');
  })
  .catch( error => {
    res.status(404).send('failed adding project');
  })
}

