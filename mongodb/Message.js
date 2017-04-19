const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  name: { type: String, required: true },
  users: { type: Array, required: true },
  task: { type: Array }
});

module.exports = mongoose.model('Message', MessageSchema);
