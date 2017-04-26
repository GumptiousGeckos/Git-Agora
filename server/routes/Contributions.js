const path = require('path');
const db = require('./../../db/db.js');

const QueryFile = db.$config.pgp.QueryFile;

const sql = (file) => {
  const fullPath = path.join(__dirname, './../../db/queries/contributions', file);
  return new QueryFile(fullPath, { minify: true });
};

const queries = {
  getRecentContributionsByUserId: sql('recentContributionsByUserId.sql'),
  getRecentContributionsByProjectId: sql('recentContributionsByProjectId.sql')
};

module.exports.getContributions = (req, res) => {
  const { q, type, id } = req.query;
  console.log(q, type, id);
  if (q === 'contributions') {
    if (type === 'project') {
      db.any(queries.getRecentContributionsByProjectId, { project_id: id })
      .then(results => (res.status(201).json(results)))
      .catch(error => (res.status(400).send(error)));
    } else if (type === 'user') {
      db.any(queries.getRecentContributionsByUserId, { user_id: id })
      .then(results => (res.status(201).json(results)))
      .catch(error => (res.status(400).send(error)));
    }
  } else {
    res.end();
  }
};
