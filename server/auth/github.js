require('dotenv').config();
const passport = require('passport');
const init = require('./init');
const GitHubStrategy = require('passport-github2').Strategy;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_SECRET;

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick( () => {
      return done(null, profile);
    });
  }
));

init();

module.exports = passport;