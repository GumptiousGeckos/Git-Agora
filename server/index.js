require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const port = process.env.PORT || 3000;
const pgp = require('pg-promise')();
const rp = require('request-promise');
const config = process.env.DATABASE_URL || process.env.DB_LOCAL;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_SECRET;
const GITHUB_CALLBACK = process.env.GITHUB_CALLBACK;
const passportGithub = require('./auth/github');
const db = require('../db/db')
const app = express();
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
  store: new pgSession({
    pg: pgp.pg,
    conString: config,
    tableName: 'sessions'
  }),
  secret:'geckos', 
  name: 'git-agora',
  resave: true, 
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  // console.log('session ', req.session);
  console.log(`Serving ${req.method} request on url ${req.url}`);
  console.log(req.cookies);
  next();
})
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/auth/github', 
  passportGithub.authenticate('github', { scope: ['user', 'repo'] })
);

app.get('/auth/github/callback', 
  (req, res) => {
    rp({
      method: 'POST',
      uri: 'https://github.com/login/oauth/access_token',
      body: {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code: req.query.code
      },
      json: true
    })
    .then( results => {
      console.log(results);
      res.cookie('git_token', results.access_token);
      res.redirect('/');
    })
    .catch( error => {
      console.log('error!', error);
      res.redirect('/');
    })
  }
);

app.get('/getUserRepos', (req, res) => {
  rp({
    uri: 'https://api.github.com/user/repos',
    headers: {
      'User-Agent': 'git-agora',
      'Authorization': `token ${req.cookies.git_token}`
    },
    json: true
  })
  .then(results => {
    console.log('gh user repo', results[0]);
    res.redirect('/')
  })
  .catch( error => {
    console.log('error', error);
    res.status(404).send('ERROR', error);
  })
});

app.get('/createHook', (req, res) => {
  // "https://api.github.com/repos/echan91/GallantGazelles/hooks"
})

app.listen(port, function() {
  console.log('listening on port', port);
});