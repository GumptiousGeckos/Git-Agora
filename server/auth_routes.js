const router = require('express').Router();
const handler = require('./auth/auth_handler');
const passportGithub = require('./auth/github');

router.route('/user')
  .get(handler.getUserAuth);

router.route('/logout')
  .get(handler.userLogout);

router.route('/github')
  .get(
    passportGithub.authenticate('github', { scope: ['user', 'repo'] })
  );

router.route('/github/callback')
  .get(
    passportGithub.authenticate('github', { failureRedirect: '/' }),
    handler.authCallback
  );

module.exports = router;
