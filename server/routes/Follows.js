const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
var pgp = require('pg-promise')();



function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/follows', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  addFollow: sql('addFollow.sql'),
  deleteFollow: sql('deleteFollow.sql'),
  getFollows: sql('getFollowsByUserId.sql')
}


module.exports.addFollow = (req, res) => {
  const { user_id, type, type_id } = req.body;

  return db.query(queries.addFollow, [user_id, type, type_id])
  .then( () => {
    res.status(201).send('Success adding follow');
  })
  .catch( error => {
    res.status(404).send('Error adding follow')
  })
}

module.exports.deleteFollow = (req, res) => {
  const { user_id, type, type_id } = req.body;

   return db.query(queries.deleteFollow, [user_id, type, type_id])
  .then( () => {
    res.status(204).send('Success deleting follow');
  })
  .catch( error => {
    res.status(404).send('Error deleting follow');
  })
}

module.exports.getFollows = (req, res) => {
  const { user_id } = req.query;

  db.query(queries.getFollows, [user_id])
  .then( data => {
    console.log('Success getting follows');
    res.status(200).json(data);
  })
   .catch( error => {
    console.log(error);
    res.status(404).send('Error getting follows');
  })
}