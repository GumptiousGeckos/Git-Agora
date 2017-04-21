const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  users: { type: Array, required: true },
  header: { type: String },
  messages: { type: Array, required: true },
  favorite: { type: Array }
});

module.exports = mongoose.model('Message', MessageSchema);
