require('dotenv').config();
const port = process.env.PORT || 3000;
const config = process.env.DATABASE_URL || process.env.DB_LOCAL;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_SECRET;
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const pgp = require('pg-promise')();
const rp = require('request-promise');
const db = require('../db/db');
const cookieParser = require('cookie-parser');
const passportGithub = require('./auth/github');
const routes = require('./routes.js');
const path = require('path');
const pgSession = require('connect-pg-simple')(session);
const git_routes = require('./git_routes');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  store: new pgSession({
    pg: pgp.pg,
    conString: config,
    tableName: 'sessions'
  }),
  secret: 'geckos',
  name: 'git-agora',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(`Serving ${req.method} request on url ${req.url}`);
  next();
});

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/auth/user', (req, res) => {
  if (req.user) {
    res.send({
      auth: true,
      user: req.user
    });
  } else {
    res.send({
      auth: false
    });
  }
});

app.get('/auth/github',
  passportGithub.authenticate('github', { scope: ['user', 'repo'] })
);

app.get('/auth/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/auth/github' }),
  (req, res) => {
    res.cookie('git_token', req.token);
    res.redirect('/');
  }
);

app.use('/api', routes);
app.use('/github', git_routes);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log('listening on port', port);
});

module.exports = app;
