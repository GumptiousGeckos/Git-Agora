var config = require('./dbconfig.js');
var pgp = require('pg-promise')();
var db = pgp(config);
