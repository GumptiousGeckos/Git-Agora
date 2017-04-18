const router = require('express').Router();
const handler = require('./routes/Request_Handler');

router.route('/comments')
  .get(handler.getComments)
  .post(handler.addComment);

router.route('/collaborators')
  .get(handler.getCollaborators)
  .post(handler.addCollaborator);

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
  .post(handler.addMessage);

router.route('/ratings')
  .get(handler.getRatings)
  .post(handler.addRatings);

router.route('/tags')
  .post(handler.addTag);

router.route('/projectsTags')
  .get(handler.getProjectsByTag)
  .post(handler.addProjectTag);

router.route('/users')
  .post(handler.addUser)
  .get(handler.getUser)
  .put(handler.updateUser)
  .delete(handler.deleteUser);

router.route('/votes')
  .post(handler.addVote)
  .get(handler.getVotes)
  .put(handler.updateVote);

router.route('/projects/users/:id')
  .get(handler.getUserProjects);

router.route('/projects')
  .get(handler.getAllProjects)
  .post(handler.addProject);

router.route('/articles')
.get(handler.getAllArticles);

router.route('/topSixArticles')
.get(handler.getTopSixArticles);

module.exports = router;
