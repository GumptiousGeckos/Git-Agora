const router = require('express').Router();
const handler = require('./routes/Request_Handler');

router.route('/comments')
  .get(handler.getComments)
  .post(handler.addComment);

router.route('/collaborators')
  .get(handler.getCollaborators)
  .post(handler.addCollaborator);

router.route('/contributions')
  .get(handler.getContributions);

router.route('/favorites')
  .get(handler.getFavorites)
  .post(handler.addFavorite)
  .delete(handler.deleteFavorite);

router.route('/follows')
  .get(handler.getFollows)
  .post(handler.addFollow)
  .delete(handler.deleteFollow);

router.route('/messages')
  .get(handler.getMessages)
  .post(handler.postMessages)
  .put(handler.putMessages);

router.route('/ratings')
  .get(handler.getRatings)
  .post(handler.addRatings);

router.route('/tags')
  .post(handler.addTag);

router.route('/projectsTags')
  .get(handler.getProjectsByTag)
  .post(handler.addProjectTag)
  .put(handler.createProjectTag);

router.route('/users/:id/projects')
  .get(handler.getUserProjects);

router.route('/users/:id')
  .get(handler.getUserById);

router.route('/users')
  .post(handler.addUser)
  .get(handler.getUser)
  .put(handler.updateUser)
  .delete(handler.deleteUser);

router.route('/votes')
  .post(handler.addVote)
  .get(handler.getVotes)
  .put(handler.updateVote);

router.route('/projects/:id')
  .get(handler.getProjectById);

router.route('/projects')
  .get(handler.getTopProjects)
  .post(handler.addProject);

router.route('/articles')
.get(handler.getAllArticles);

router.route('/articles/:id')
  .get(handler.getArticleById);

router.route('/topSixArticles')
.get(handler.getTopSixArticles);

module.exports = router;
