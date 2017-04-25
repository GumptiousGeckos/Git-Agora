const path = require('path');
const db = require('./../../db/db.js');

const QueryFile = db.$config.pgp.QueryFile;

const sql = (file) => {
  const fullPath = path.join(__dirname, './../../db/queries/contributions', file);
  return new QueryFile(fullPath, { minify: true });
};

const queries = {
  getTopContributorsByProjectId: sql('topContributorsByProjectId.sql')
};

module.exports.getContributors = (req, res) => {
  const { q, id } = req.query;
  if (q === 'project') {
    db.any(queries.getTopContributorsByProjectId, { project_id: id })
    .then(results => (res.status(201).json(results)))
    .catch(error => (res.status(400).end(error)));
  } else {
    res.end();
  }
};
