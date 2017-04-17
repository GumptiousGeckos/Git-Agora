require('dotenv').config();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const db = require('../../db/db');

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_SECRET;
const GITHUB_CALLBACK = process.env.GITHUB_CALLBACK;

passport.serializeUser((user, done) => {
  console.log('serializing');
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('deserializing');
  db.query('SELECT id, username FROM users where id=$1', [user.id])
  .then(results => {
    done(null, results);
  })
  .catch(error => {
    done(error, null);
  });
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  passReqToCallback: true
},
  (req, accessToken, refreshToken, profile, done) => {
    req.token = accessToken;
    db.any('INSERT INTO users(id, username, email) SELECT ${id}, ${username}, ${email} WHERE NOT EXISTS (SELECT 1 FROM users WHERE id=${id})',
      { id: profile.id, username: profile.username, email: profile.email })
    .then(results => {
      return done(null, profile);
    })
    .catch(error => {
      return done(error, null);
    });
  }
));

module.exports = passport;
