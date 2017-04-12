const passport = require('passport');
const db = require('../../db/db');

module.exports = function() {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    db.query(`SELECT * FROM users where id=$1`, [user.id])
    .then( results => {
      done(null, results);
    })
    .catch( error => {
      done(error, null);
    })
  });
}