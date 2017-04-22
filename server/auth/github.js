require('dotenv').config();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const db = require('../../db/db');
const path = require('path');
const pgp = require('pg-promise')();

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_SECRET;
const GITHUB_CALLBACK = process.env.GITHUB_CALLBACK;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/users', file);
  return new pgp.QueryFile(fullPath, { minify: true });
}

const queries = {
  addUser: sql('createUser.sql'),
  getUserByID: sql('getUserById.sql')
};

passport.serializeUser((user, done) => {
  console.log('serializing');
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('deserializing');
  db.query(queries.getUserByID, {
    id: user.id
  })
  .then((results) => {
    done(null, results);
  })
  .catch((error) => {
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

    db.any(queries.addUser.query, {
      id: profile.id,
      name: profile.displayName,
      username: profile.username,
      email: profile.emails ? profile.emails[0].value : null,
      avatar: profile._json.avatar_url
    })
    .then(() => {
      return done(null, profile);
    })
    .catch((error) => {
      return done(error, null);
    });
  }
));

module.exports = passport;
