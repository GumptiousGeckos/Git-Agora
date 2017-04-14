const router = require('express').Router();
const handler = require('./routes/Request_Handler');



router.route('/comments').get(handler.getComments);
router.route('/comments').post(handler.addComment);

router.route('/collaborators').get(handler.getCollaborators);
router.route('/collaborators').post(handler.addCollaborator);

router.route('/favorites').get(handler.getFavorites);
router.route('/favorites').post(handler.addFavorite);
router.route('/favorites').delete(handler.deleteFavorite);

router.route('/follows').get(handler.getFollows);
router.route('/follows').post(handler.addFollow);
router.route('/follows').delete(handler.deleteFollow);

router.route('/messages').get(handler.getMessages);
router.route('/messages').post(handler.addMessage);

router.route('/ratings').get(handler.getRatings);
router.route('/ratings').post(handler.addRatings);

router.route('/tags').post(handler.addTag);

router.route('/tagstopics').get(handler.getTopicsByTag);
router.route('/tagstopics').post(handler.addTopicTag);

router.route('/topics').post(handler.addTopic);

router.route('/users').post(handler.addUser);
router.route('/users').get(handler.getUser);
router.route('/users').delete(handler.deleteUser);

router.route('/votes').post(handler.addVote);
router.route('/votes').get(handler.getVotes);
router.route('/votes').put(handler.updateVote);


module.exports = router;