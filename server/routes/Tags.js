const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise')();



function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/tags', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  addTag: sql('insertTag.sql')
}


module.exports.addTag = (req, res) => {
  const { tag_name } = req.body;

  return db.query(queries.addTag, [tag_name])
  .then( () => {
    res.status(201).send('Success adding tag');
  })
  .catch( error => {
    res.status(404).send('error adding tag');
  })
}
