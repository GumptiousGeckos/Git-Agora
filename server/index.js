require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const port = process.env.PORT || 3000;
const pgp = require('pg-promise')();
// const config = {
//   host: 'localhost',
//   port: 5432,
//   database: 'gecko'
// };
var config = process.env.DATABASE_URL || process.env.DB_LOCAL;
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
  next();
})
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/auth/github', 
  passportGithub.authenticate('github', { scope: ['user:email'] })
);

app.get('/auth/github/callback', 
  passportGithub.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('Successful login');
    res.redirect('/')
  }
);

app.listen(port, function() {
  console.log('listening on port', port);
});