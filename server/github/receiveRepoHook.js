const db = require('./../../db/db.js');
const pgp = require('pg-promise')();
const path = require('path');

const sql = (file) => {
  const fullPath = path.join(__dirname, './../../db/queries/contributions', file);
  return new pgp.QueryFile(fullPath, { minify: true });
};

const queries = {
  newContribution: sql('newContribution.sql'),
  editContribution: sql('editContribution.sql')
};

module.exports = (req, res) => {
  const { pull_request, repository } = req.body;
  const pullRequest = pull_request;
  if (req.body.action === 'opened') {
    db.none(queries.newContribution, {
      id: pullRequest.id,
      user_id: pullRequest.user.id,
      project_id: repository.id,
      owner_id: repository.owner.id,
      stage: 'OPEN',
      dev_points: 1,
      idea_points: 1,
      title: pullRequest.title,
      url: pullRequest.url,
      updated_at: pullRequest.updated_at
    });
  } else if (req.body.action === 'reopened') {
    db.none(queries.editContribution, {
      id: pullRequest.id,
      stage: 'OPEN',
      dev_points: 1,
      idea_points: 1,
      updated_at: pullRequest.updated_at
    });
  } else if (req.body.action === 'closed' && pullRequest.merged) {
    db.none(queries.editContribution, {
      id: pullRequest.id,
      stage: 'CLOSED',
      dev_points: 3,
      idea_points: 3,
      updated_at: pullRequest.updated_at
    });
  } else if (req.body.action === 'closed') {
    db.none(queries.editContribution, {
      id: pullRequest.id,
      stage: 'REJECTED',
      dev_points: 0,
      idea_points: 0,
      updated_at: pullRequest.updated_at
    });
  }
  res.end();
};
