const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise')();



function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/users', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  addUser: sql('createUser.sql'),
  getUserById: sql('getUserById.sql'),
  getUserByUsername: sql('getUserByUsername.sql'),
  deleteUser: sql('deleteUserByUsername.sql')
}


module.exports.addUser = (req, res) => {
  const { username, password, email, mobile } = req.body;

  return db.query(queries.addUser, [username, password, email, mobile])
  .then( () => {
    res.status(202).send('Success adding user');
  })
  .catch( error => {
    console.log(error);
    res.status(404).send('failed to add user');
  });
}

module.exports.getUser = (req, res) => {
  const { username } = req.query;

  return db.query(queries.getUserByUsername, [username])
  .then( data => {
    console.log('Success getting user');
    res.status(201).json(data);
  })
  .catch( error => {
    res.status(404).send('FAILED getting user');
  });
}


module.exports.deleteUser = (req, res) => {
  const { username } = req.body;

  console.log(username);

  return db.query(queries.deleteUser, [username])
  .then( data => {
    console.log('You deleted this user:', data);
    res.status(201).json(data);
  })
  .catch( error => {
    console.log(error);
    res.status(404).send('FAILED deleting user');
  });
}





