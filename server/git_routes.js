const router = require('express').Router();
const handler = require('./github/git_handler');
const passportGithub = require('./auth/github');

router.route('/user/repos')
  .get(handler.getUserRepos);


router.route('/hook')
  .post(handler.receiveRepoHook);

module.exports = router;