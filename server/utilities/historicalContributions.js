const db = require('./../../db/db.js');
const QueryFile = require('pg-promise')().QueryFile;
const path = require('path');

const sql = (file) => {
  const fullPath = path.join(__dirname, './../../db/queries/contributions', file);
  return new QueryFile(fullPath, { minify: true });
};

const queries = {
  addUser: sql('./../users/createUser.sql'),
  newContribution: sql('newContribution.sql')
};

module.exports = (pulls) => {
  const { id, html_url, user, state, head, base, title, updated_at, merged_at } = pulls;
  let stage;
  let dev_points;
  let idea_points;
  return db.one(queries.addUser, {
    id: head.user.id,
    username: head.user.login,
    name: null,
    email: null, // this is a workaround to get username without getting auth.
    avatar: head.user.avatar_url
  })
  .then(() => {
    if (state === 'open') {
      stage = 'OPEN';
      dev_points = 1;
      idea_points = 1;
    } else if (state === 'closed' && merged_at) {
      stage = 'CLOSED';
      dev_points = 3;
      idea_points = 2;
    } else if (state === 'closed') {
      stage = 'REJECTED';
      dev_points = 0;
      idea_points = 0;
    } else {
      console.log(state);
    }
    return db.none(queries.newContribution, {
      id,
      user_id: user.id,
      project_id: base.repo.id,
      owner_id: base.user.id,
      stage,
      dev_points,
      idea_points,
      title,
      updated_at,
      url: html_url
    });
  });
};
