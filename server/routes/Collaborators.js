const db = require('./../../db/db.js');
const path = require('path');

var QueryFile = db.$config.pgp.QueryFile;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/collaborators', file);
  return new QueryFile(fullPath, { minify: true });
}

const queries = {
  addCollaborator: sql('addCollaborator.sql'),
  getCollaborators: sql('getCollaborators.sql')
};


module.exports.getCollaborators = (req, res) => {
  const { topic_id } = req.query;

  return db.query(queries.getCollaborators, [topic_id])
  .then((data) => {
    console.log('Success get collaborators');
    res.status(200).json(data);
  })
  .catch((error) => {
    res.status(404).send('error getting collaborators', error);
  });
};


module.exports.addCollaborator = (req, res) => {
  const { user_id, topic_id } = req.body;
  return db.query(queries.addCollaborator, [user_id, topic_id])
  .then(() => {
    res.status(201).send('Success adding collaborator');
  })
  .catch((error) => {
    res.status(404).send(error);
  });
};
