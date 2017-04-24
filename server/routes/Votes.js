const db = require('./../../db/db.js');
const path = require('path');

var QueryFile = db.$config.pgp.QueryFile;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/votes', file);
  return new QueryFile(fullPath, {minify: true});
}

let queries = {
  addVote: sql('insertVote.sql'),
  updateVote: sql('updateVoteValue.sql'),
  getVotes: sql('getVoteCount.sql'),
  checkForVote: sql('getVoteByUserIdTopicIdAndType.sql')
}


module.exports.addVote = (req, res) => {
  const { user_id, type, topic_id, vote_type } = req.body;

  return db.query(queries.addVote, [user_id, type, topic_id, vote_type])
  .then( () => {
    res.status(201).send('Success adding vote');
  })
  .catch( error => {
    res.status(404).send('Error adding vote');
  })
}


module.exports.getVotes = (req, res) => {
  const { type, topic_id } = req.query;

  return db.query(queries.getVotes, [type, topic_id])
   .then( data => {
    res.status(200).json(data);
  })
  .catch( error => {
    res.status(404).send('Error getting votes');
  })
}

module.exports.updateVote = (req, res) => {
  const { vote_type, user_id, type, topic_id } = req.body;
  return db.query(queries.checkForVote, {user_id: user_id, vote_type: vote_type, type: type, topic_id: topic_id})
  .then( (result) => {
    if (result[0]) {
      return db.query(queries.updateVote, {user_id: user_id, vote_type: vote_type, type: type, topic_id: topic_id})
      .then( () => {
        res.status(204).send('Success updating vote');
      })
      .catch( error => {
        res.status(404).send('Error updating vote');
      })
    } else {
      return db.query(queries.addVote, {user_id: user_id, vote_type: vote_type, type: type, topic_id: topic_id})
      .then( () => {
        res.status(201).send('Success adding vote');
      })
      .catch( error => {
        res.status(404).send('Error adding vote');
      })
    }
  })
  .catch( error => {
    res.status(404).send('Error updating vote');
  })
}


