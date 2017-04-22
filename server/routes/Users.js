const db = require('./../../db/db.js');
const path = require('path');
const pgp = require('pg-promise')();

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/users', file);
  return new pgp.QueryFile(fullPath, { minify: true });
}

const queries = {
  addUser: sql('createUser.sql'),
  getUserById: sql('getUserById.sql'),
  getUserByUsername: sql('getUserByUsername.sql'),
  deleteUser: sql('deleteUserByUsername.sql'),
  updateUser: sql('updateUser.sql')
};


module.exports.addUser = (req, res) => {
  const { id, name, username, email, avatar } = req.body;

  return db.query(queries.addUser, { id, username, name, email, avatar })
  .then(() => {
    res.status(201).send('Success adding user');
  })
  .catch((error) => {
    console.log(error);
    res.status(404).send('failed to add user');
  });
};

module.exports.getUser = (req, res) => {
  const { username } = req.query;

  return db.query(queries.getUserByUsername, [username])
  .then((data) => {
    console.log('Success getting user');
    res.status(200).json(data);
  })
  .catch((error) => {
    res.status(404).send('FAILED getting user');
  });
};


module.exports.deleteUser = (req, res) => {
  const { username } = req.body;

  console.log(username);

  return db.query(queries.deleteUser, [username])
  .then((data) => {
    console.log('You deleted this user:', data);
    res.status(204).json(data);
  })
  .catch((error) => {
    console.log(error);
    res.status(404).send('FAILED deleting user');
  });
};

module.exports.updateUser = (req, res) => {
  const { description } = req.body;
  const { username } = req.user[0];

  db.query(queries.updateUser, {
    username,
    description
  })
  .then(() => {
    res.end();
  })
  .catch((error) => {
    res.status(404).send('FAILED updating user', error);
  });
};

module.exports.getUserById = (req, res) => {
  db.query(queries.getUserById, { id: req.params.id })
  .then((results) => {
    res.status(200).json(results);
  })
  .catch((error) => {
    res.status(404).send('ERROR', error);
  });
};
