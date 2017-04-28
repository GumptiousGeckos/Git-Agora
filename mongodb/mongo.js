require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/geckos';

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;
db.once('open', () => console.log('mongoose connected successfully'));

module.exports = db;
