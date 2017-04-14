module.exports.getCollaborators = require('./Collaborators').getCollaborators;
module.exports.addCollaborator = require('./Collaborators').addCollaborator;

module.exports.getComments = require('./Comments').getComments;
module.exports.addComment = require('./Comments').addComment;

module.exports.getFavorites = require('./Favorites').getFavorites;
module.exports.addFavorite = require('./Favorites').addFavorite;
module.exports.deleteFavorite = require('./Favorites').deleteFavorite;

module.exports.addFollow = require('./Follows').addFollow;
module.exports.deleteFollow = require('./Follows').deleteFollow;
module.exports.getFollows = require('./Follows').getFollows;

module.exports.getMessages = require('./Messages').getMessages;
module.exports.addMessage = require('./Messages').addMessage;

module.exports.getRatings = require('./Ratings').getRatings;
module.exports.addRatings = require('./Ratings').addRatings;

module.exports.addTag = require('./Tags').addTag;

module.exports.getTopicsByTag = require('./Tags_Topics').getTopicsByTag;
module.exports.addTopicTag = require('./Tags_Topics').addTopicTag;

module.exports.addTopic = require('./Topics').addTopic;

module.exports.addUser = require('./Users').addUser;
module.exports.getUser = require('./Users').getUser;
module.exports.deleteUser = require('./Users').deleteUser;

module.exports.addVote = require('./Votes').addVote;
module.exports.updateVote = require('./Votes').updateVote;
module.exports.getVotes = require('./Votes').getVotes;