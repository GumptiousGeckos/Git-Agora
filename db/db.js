require('dotenv').config()
// const local = {
//   host: 'localhost',
//   port: 5432,
//   database: 'gecko'
// };

var config = process.env.DATABASE_URL || process.env.DB_LOCAL;

var pgp = require('pg-promise')();

module.exports = pgp(config);