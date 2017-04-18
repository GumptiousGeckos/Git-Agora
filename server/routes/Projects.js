require('dotenv').config();
const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise')();
const rp = require('request-promise');
const GITHUB_CALLBACK = process.env.GITHUB_CALLBACK;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/projects', file);
  return new pgp.QueryFile(fullPath, { minify: true });
}

const queries = {
  getAllProjects: sql('getAllProjects.sql'),
  addProject: sql('addProject.sql')
};


module.exports.getAllProjects = (req, res) => {

  return db.query(queries.getAllProjects)
  .then((data) => {
    console.log('Success getting all projects');
    res.status(200).json(data);
  })
  .catch((error) => {
    res.status(404).send('failed to get all projects');
  });
};

module.exports.addProject = (req, res) => {
  const { id } = req.user[0];
  const { projectId, name, description, link, webhook } = req.body;
  rp({
    method: 'POST',
    uri: webhook,
    body: {
      name: 'web',
      active: true,
      events: ['pull_request'],
      config: {
        url: GITHUB_CALLBACK + '/github/hook',
        content_type: 'json'
      }
    },
    headers: {
      'User-Agent': 'git-agora',
      Authorization: `token ${req.cookies.git_token}`
    },
    json: true
  });
  return db.query(queries.addProject, [projectId, id, name, description, link])
  .then((results) => {
    res.status(201).send(results);
  })
  .catch((error) => {
    res.status(404).send('failed adding project');
  });
};
