const db = require('./../../db/db.js');
const path = require('path');
const rp = require('request-promise');

var QueryFile = db.$config.pgp.QueryFile;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/articles', file);
  return new QueryFile(fullPath, {minify: true});
}

let queries = {
  getTopArticles: sql('getTopArticles.sql'),
  getTopSixArticles: sql('getTopSixArticles.sql'),
  getTopArticlesAndUserVotes: sql('getTopArticlesAndUserVotes.sql'),
  getArticleById: sql('getArticleById.sql'),
  getArticleByIdAndUserVotes: sql('getArticleByIdAndUserVotes.sql')
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

module.exports.getArticleById = (req, res) => {
  if (req.user) {
    console.log(req.user[0]);
    console.log({user_id: req.user[0].id, id: req.params.id});
    return db.query(queries.getArticleByIdAndUserVotes, {user_id: req.user[0].id, id: req.params.id})
    .then( (data) => {
    console.log('Success getting article', data);
    res.status(200).json(data);
    })
    .catch( error => {
      res.status(404).send('failed to get article and user votes');
    });
  } else {
    db.query(queries.getArticleById, { id: req.params.id })
    .then((results) => {
      console.log(results);
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(404).send('ERROR', error);
    });
  }
}
