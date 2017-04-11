const passport = require('passport');
const db = require('../../db/db');

module.exports = function() {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    db.query(`SELECT * FROM sessions where sid=$1`, [id])
    .then( results => {
      done(null, results);
    })
    .catch( error => {
      done(error, null);
    })
  });
}