const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise')();
const rp = require('request-promise');


function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/articles', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  getAllArticles: sql('getAllArticles.sql'),
  getTopSixArticles: sql('getTopSixArticles.sql')
}


module.exports.getAllArticles = (req, res) => {

  return db.query(queries.getAllArticles)
  .then( (data) => {
    console.log('Success getting articles');
    res.status(200).json(data);
  })
  .catch( error => {
    res.status(404).send('failed to get articles');
  })
}


module.exports.getTopSixArticles = (req, res) => {

  return db.query(queries.getTopSixArticles)
  .then( (data) => {
    console.log('Success getting top articles');
    res.status(200).json(data);
  })
  .catch( error => {
    res.status(404).send('failed to get articles');
  })
}