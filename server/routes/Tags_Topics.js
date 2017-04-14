const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise')();



function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/tags_topics', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  getTopicsByTag: sql('getTopicsByTag.sql'),
  addTopicTag: sql('addTopicTag.sql')
}


module.exports.getTopicsByTag = (req, res) => {
  const { tag_id } = req.query;

  return db.query(queries.getTopicsByTag, [tag_id])
  .then( data => {
    console.log('Success getting topics by tag');
    res.status(201).json(data);
  })
  .catch( error => {
    res.status(404).send(error, 'FAILED getting topics by tag');
  });
}


module.exports.addTopicTag = (req, res) => {
  const { tag_id, topic_id } = req.body;

  return db.query(queries.addTopicTag, [tag_id, topic_id])
  .then(() => {
    res.status(202).send('Success adding topic tag');
  })
  .catch( error => {
    res.status(404).send('failed to add topic tag');
  })
}



