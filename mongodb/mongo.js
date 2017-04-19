require('dotenv').config();
const mongoose = require('mongoose');

const mongodbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017';

mongoose.connect(mongodbURL);

const db = mongoose.connection;
db.once('open', () => console.log('mongoose connected successfully'));

module.exports = db;
