require('dotenv').config()

var config = process.env.DATABASE_URL || process.env.DB_LOCAL;

var pgp = require('pg-promise')();

module.exports = pgp(config);