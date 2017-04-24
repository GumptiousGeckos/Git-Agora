require('dotenv').config();

const port = process.env.PORT || 3000;
const config = process.env.DATABASE_URL || process.env.DB_LOCAL;
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const pgp = require('pg-promise')();
// const db = require('../db/db');
const cookieParser = require('cookie-parser');
const routes = require('./routes.js');
const path = require('path');
const pgSession = require('connect-pg-simple')(session);
const gitRoutes = require('./git_routes');
const authRoutes = require('./auth_routes');
const mongo = require('./../mongodb/mongo');

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

app.use(express.static(path.join(__dirname, '/../react-client/dist')));
app.use('/api', routes);
app.use('/github', gitRoutes);
app.use('/auth', authRoutes);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log('listening on port', port);
});

module.exports = app;
