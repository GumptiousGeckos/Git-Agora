const db = require('./../../db/db.js');
const path = require('path');

var QueryFile = db.$config.pgp.QueryFile;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/favorites', file);
  return new QueryFile(fullPath, {minify: true});
}

let queries = {
  addFavorite: sql('addFavorite.sql'),
  deleteFavorite: sql('deleteFavorite.sql'),
  getFavorites: sql('getFavoritesByUserId.sql'),
  checkFavorite: sql('checkFavorite.sql')
}


module.exports.addFavorite = (req, res) => {
  const { user_id, type, favorite_id } = req.body;

  return db.query(queries.addFavorite, { user_id, type, favorite_id })
  .then( () => {
    res.status(201).send('Success adding favorite');
  })
  .catch( error => {
    res.status(404).send('Error adding favorite');
  })
}


module.exports.deleteFavorite = (req, res) => {
  const { user_id, type, favorite_id } = req.query;

  return db.query(queries.deleteFavorite, { user_id, type, favorite_id })
  .then( () => {
    res.status(204).send('Success deleting favorite');
  })
  .catch( error => {
    res.status(404).send('Error deleting favorite');
  })
}

module.exports.getFavorites = (req, res) => {
  return db.query(queries.getFavorites, { user_id: req.params.id })
   .then( data => {
    console.log('Success getting favorites');
    res.status(200).json(data);
  })
  .catch( error => {
    console.log(error);
    res.status(404).send('Error getting favorites');
  })
}

module.exports.getFavorite = (req, res) => {
  const { user_id, type, favorite_id } = req.query;

  return db.query(queries.checkFavorite, { user_id, type, favorite_id })
  .then( (data) => {
    res.status(200).send(data);
  })
  .catch( error => {
    res.status(404).send('Error checking favorite status');
  })
}


