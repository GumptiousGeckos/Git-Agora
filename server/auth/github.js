require('dotenv').config();
const passport = require('passport');
const init = require('./init');
const GitHubStrategy = require('passport-github2').Strategy;
const db = require('../../db/db');

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_SECRET;

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://44d1fb0d.ngrok.io/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // console.log('accessToken', accessToken);
    // console.log('refreshToken', refreshToken);
    // console.log('profile', profile);
    process.nextTick( () => {
      return done(null, profile);
    });
  }
));

init();

module.exports = passport;