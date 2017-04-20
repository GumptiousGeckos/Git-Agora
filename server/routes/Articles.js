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
  getTopArticles: sql('getTopArticles.sql'),
  getTopSixArticles: sql('getTopSixArticles.sql'),
  getTopArticlesAndUserVotes: sql('getTopArticlesAndUserVotes.sql')
}


module.exports.getTopSixArticles = (req, res) => {

  return db.query(queries.getTopSixArticles)
  .then( (data) => {
    console.log('Success getting top articles');
    res.status(200).json(data);
  })
  .catch( error => {
    res.status(404).send('failed to get articles');
  });
}


module.exports.getTopArticles = (req, res) => {
  if (req.user) {
    console.log(req.user[0]);
    return db.query(queries.getTopArticlesAndUserVotes, {user_id: req.user[0].id})
    .then( (data) => {
    console.log('Success getting top articles', data);
    res.status(200).json(data);
    })
    .catch( error => {
      res.status(404).send('failed to get articles and user votes');
    });
  } else {
    return db.query(queries.getTopArticles)
    .then( (data) => {
    console.log('Success getting articles');
    res.status(200).json(data);
    })
    .catch( error => {
    res.status(404).send('failed to get articles without userId');
    });
  }
}
