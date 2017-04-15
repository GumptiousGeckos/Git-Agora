require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const pgp = require('pg-promise')();
const passportGithub = require('./auth/github');
const db = require('../db/db');
const routes = require('./routes.js');

// const config = {
//   host: 'localhost',
//   port: 5432,
//   database: 'gecko'
// };
const port = process.env.PORT || 3000;
const config = process.env.DATABASE_URL || process.env.DB_LOCAL;
const app = express();
app.use(require('cookie-parser')());
// const router = require ('./routes.js');
let path = require('path');
let handler = require('./routes/Request_Handler');

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
  // console.log('session ', req.session);
  console.log(`Serving ${req.method} request on url ${req.url}`);
  next();
});

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/auth/github',
  passportGithub.authenticate('github', { scope: ['user:email'] })
);

app.get('/auth/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('Successful login');
    res.redirect('/');
  }
);

// app.get('/api/projects', (req, res) => {
//   const results = [{
//     id: 0,
//     title: 'Project Title',
//     description: 'Project Description!',
//     likes: 5,
//     dislikes: 1,
//     collaborators: [{ name: 'Jon' }]
//   }];
//   res.status(200).json(results);
// });

app.use('/api', routes);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, function() {
  console.log('listening on port', port);
});

module.exports = app;
