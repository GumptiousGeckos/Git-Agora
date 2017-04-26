const db = require('./../../db/db.js');
const rp = require('request-promise');
const path = require('path');
const QueryFile = require('pg-promise')().QueryFile;

const sql = (file) => {
  const fullPath = path.join(__dirname, './../../db/queries/projects', file);
  return new QueryFile(fullPath, { minify: true });
};

const queries = {
  filterRepoProjects: sql('filterRepoProjects.sql')
};

module.exports = (req, res) => {
  let initialResults;
  let projectList = [];
  let foundList = [];
  let filteredResults = [];
  if (req.isAuthenticated()) {
    rp({
      uri: 'https://api.github.com/user/repos',
      headers: {
        'User-Agent': 'git-agora',
        Authorization: `token ${req.cookies.git_token}`
      },
      qs: {
        sort: 'updated',
        visibility: 'public',
        per_page: '100'
      },
      json: true
    })
    .then((results) => {
      initialResults = results;
      projectList = results.map(repo => repo.id);
      return db.tx(t => (
        t.batch(projectList.map(id => t.any(queries.filterRepoProjects,
          { id })))
      ));
    })
    .then((list) => {
      foundList = [].concat.apply([], list).map(ele => ele.id);
      filteredResults = initialResults.filter((repo) => {
        if (foundList.indexOf(repo.id) < 0) {
          return repo;
        }
      });
      res.status(201).json(filteredResults);
    })
    .catch((error) => {
      res.status(404).send('ERROR', error);
    });
  } else {
    res.status(401).send('Please login to access this feature');
  }
};
