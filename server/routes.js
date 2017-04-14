const router = require('express').Router();
const Collaborators = ('./routes/Collaborators');
const Comments = ('./routes/Comments');
const Favorites = ('./routes/Favorites');
const Follows = ('./routes/Follows');
const Messages = ('./routes/Messages');
const Ratings = ('./routes/Ratings');
const Tags = ('./routes/Tags');
const TagsTopics = ('./routes/Tags_Topics');
const Topics = ('./routes/Topics');
const Users = ('./routes/Users');
const Votes = ('./routes/Votes');









router.get('/comments', Comments.getComments);
router.post('/comments', Comments.insertComment);

router.get('/messages', Messages);
router.post('/messages', Messages);
// don't need?
// router.put('/messages', )

router.get('/votes', Votes);
router.put('/votes', Votes);

router.get('/users', Users);

router.get('/user', Users);
router.post('/user', Users);
router.put('/user', Users);
router.delete('/user', Users);

router.get('/topics', Topics);
router.post('/topics', Topics);
router.delete('/topics', Topics);

router.get('/ratings', Ratings);

router.get('/collaborators', Collaborators);
router.post('/collaborators', Collaborators);

router.get('/favorites', Favorites);
router.delete('/favorites', Favorites);

router.post('/tags', Tags);

router.get('/tagstopics', TagsTopics);

router.get('/follows', Follows);
router.post('/follows', Follows);
router.delete('/follows', Follows);
// don't need?
// router.put('/followers', )

