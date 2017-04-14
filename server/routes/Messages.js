const db = require('./../../db/db.js');
const path = require('path');
const pg = require('pg');
const pgp = require('pg-promise')();



function sql(file) {
  var fullPath = path.join(__dirname, './../../db/queries/messages', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

let queries = {
  getMessages: sql('getMessages.sql'),
  addMessage: sql('insertMessage.sql')
}


module.exports.getMessages = (req, res) => {
  const { sender_id, receiver_id } = req.query;

  return db.query(queries.getMessages, [sender_id, receiver_id])
  .then( data => {
    console.log('Success getting messages');
    res.status(200).json(data);
  })
  .catch( error => {
    res.status(404).send(error, 'FAILED getting messages');
  });
}


module.exports.addMessage = (req, res) => {
  const { sender_id, receiver_id, content } = req.body;

  return db.query(queries.addMessage, [sender_id, receiver_id, content])
  .then(() => {
    res.status(201).send('Success adding message');
  })
  .catch( error => {
    res.status(404).send('failed to add message');
  })
}