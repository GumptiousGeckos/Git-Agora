const db = require('./../../db/db.js');
const path = require('path');

var QueryFile = db.$config.pgp.QueryFile;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/ratings', file);
  return new QueryFile(fullPath, {minify: true});
}

let queries = {
  getRatings: sql('getRatings.sql'),
  addRatings: sql('addRatings.sql')
}


module.exports.getRatings = (req, res) => {
  const { user_id } = req.query;

  return db.query(queries.getRatings, [user_id])
  .then( data => {
    console.log('Success getting user ratings');
    res.status(200).json(data);
  })
  .catch( error => {
    res.status(404).send(error, 'FAILED getting user ratings');
  });
}


module.exports.addRatings = (req, res) => {
  const { user_id, dev_points, idea_points } = req.body;

  return db.query(queries.addRatings, [user_id, dev_points, idea_points])
  .then(() => {
    res.status(201).send('Success adding user ratings');
  })
  .catch( error => {
    res.status(404).send('failed to add user ratings');
  })
}

