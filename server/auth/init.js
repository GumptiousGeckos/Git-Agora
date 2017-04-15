const passport = require('passport');
const db = require('../../db/db');

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log('serialize');
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    console.log('deserialize', user);
    db.query('SELECT * FROM users where id=$1', [user.id])
    .then(results => {
      console.log(results);
      done(null, results);
    })
    .catch(error => {
      done(error, null);
    });
  });
};
