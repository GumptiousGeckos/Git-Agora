const db = require('./../../db/db.js');
const pgp = require('pg-promise')();
const path = require('path');

const sql = (file) => {
  const fullPath = path.join(__dirname, './../../db/queries/contributions', file);
  return new pgp.QueryFile(fullPath, { minify: true });
};

const queries = {
  addUser: sql('./../users/createUser.sql'),
  newContribution: sql('newContribution.sql')
};

module.exports = (req, res) => {
  const { id, html_url, user, head, base, title, updated_at, merged_at } = req.body;
  db.query(queries.addUser, {
    id: head.user.id,
    username: head.user.login,
    name: null,
    email: null, // this is a workaround to get username without getting auth.
    avatar: head.user.avatar_url
  });
  if (req.body.state === 'open') {
    db.none(queries.newContribution, {
      id,
      user_id: user.id,
      project_id: base.repo.id,
      owner_id: base.user.id,
      stage: 'OPEN',
      dev_points: 1,
      idea_points: 1,
      title,
      url: html_url,
      updated_at
    });
  } else if (req.body.state === 'closed' && merged_at) {
    db.none(queries.newContribution, {
      id,
      user_id: user.id,
      project_id: base.repo.id,
      owner_id: base.user.id,
      stage: 'CLOSED',
      dev_points: 3,
      idea_points: 3,
      title,
      url: html_url,
      updated_at
    });
  } else if (req.body.state === 'closed') {
    db.none(queries.newContribution, {
      id,
      user_id: user.id,
      project_id: base.repo.id,
      owner_id: base.user.id,
      stage: 'REJECTED',
      dev_points: 0,
      idea_points: 0,
      title,
      url: html_url,
      updated_at
    });
  }
  res.end();
};
