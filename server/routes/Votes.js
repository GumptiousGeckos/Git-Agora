const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
var pgp = require('pg-promise')();



function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/votes', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  addVote: sql('insertVote.sql'),
  updateVote: sql('updateVoteValue.sql'),
  getVotes: sql('getVoteCount.sql')
}


module.exports.addVote = (req, res) => {
  const { user_id, topic_id, vote_type } = req.body;

  return db.query(queries.addVote, [user_id, topic_id, vote_type])
  .then( () => {
    res.status(202).send('Success adding vote');
  })
  .catch( error => {
    res.status(404).send('Error adding vote');
  })
}


module.exports.updateVote = (req, res) => {
  const { vote_type, user_id, topic_id } = req.body;

  return db.query(queries.updateVote, [vote_type, user_id, topic_id])
  .then( () => {
    res.status(202).send('Success updating vote');
  })
  .catch( error => {
    res.status(404).send('Error updating vote');
  })
}

module.exports.getVotes = (req, res) => {
  const { topic_id } = req.query;

  return db.query(queries.getVotes, [topic_id])
   .then( data => {
    console.log('Success getting votes');
    res.status(201).json(data);
  })
  .catch( error => {
    console.log(error);
    res.status(404).send('Error getting votes');
  })
}


