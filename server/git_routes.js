const router = require('express').Router();
const handler = require('./github/git_handler');

router.route('/user/repos')
  .get(handler.getUserRepos);


router.route('/hook')
  .post(handler.receiveRepoHook);

module.exports = router;
