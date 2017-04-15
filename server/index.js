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
const handler = require('./routes/Request_Handler');
const pgSession = require('connect-pg-simple')(session);

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
  console.log(req.user);
  console.log(req.body);
  console.log(`Serving ${req.method} request on url ${req.url}`);
  next();
});

app.use(express.static(__dirname + '/../react-client/dist'));

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

app.get('/github/user/repos', (req, res) => {
  rp({
    uri: 'https://api.github.com/user/repos', // CHANGE: Will need to change this to something we get from our request
    headers: {
      'User-Agent': 'git-agora',
      Authorization: `token ${req.cookies.git_token}`
    },
    qs: {
      sort: 'updated',
      visibility: 'public',
      per_page: '100'
    },
    json: true
  })
  .then((results) => {
    console.log('gh user repo', results.length);
    res.json(results);
  })
  .catch((error) => {
    console.log('error', error);
    res.status(404).send('ERROR', error);
  });
});

// app.get('/github/hook', (req, res) => {
//   rp({
//     method: 'POST',
//     uri: 'https://api.github.com/repos/echan91/testRepo/hooks', // CHANGE: Will need to change this to something we get from our request
//     body: {
//       name: 'web',
//       active: true,
//       events: ['pull_request', 'push'],
//       config: {
//         url: 'http://b10d2993.ngrok.io/github/hook', // CHANGE: to deployment URL
//         content_type: 'json'
//       }
//     },
//     headers: {
//       'User-Agent': 'git-agora',
//       Authorization: `token ${req.cookies.git_token}`
//     },
//     json: true
//   })
//   .then(() => {
//     console.log('webhook successful');
//     res.redirect('/');
//   })
//   .catch((error) => {
//     console.log('error', error);
//     res.redirect('/');
//   });
// });

app.post('/github/hook', (req, res) => {
  console.log('receiving post from webhook', req);
  res.end();
});

app.use('/api', routes);


app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, function() {
  console.log('listening on port', port);
});

module.exports = app;
