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

module.exports.getProjectsByTag = require('./Projects_Tags').getProjectsByTag;
module.exports.addProjectTag = require('./Projects_Tags').addProjectTag;
module.exports.createProjectTag = require('./Projects_Tags').createProjectTag;

module.exports.addUser = require('./Users').addUser;
module.exports.getUser = require('./Users').getUser;
module.exports.deleteUser = require('./Users').deleteUser;
module.exports.updateUser = require('./Users').updateUser;

module.exports.addVote = require('./Votes').addVote;
module.exports.updateVote = require('./Votes').updateVote;
module.exports.getVotes = require('./Votes').getVotes;

module.exports.addTopic = require('./Topics').addTopic;

module.exports.getAllProjects = require('./Projects').getAllProjects;
module.exports.addProject = require('./Projects').addProject;
module.exports.getUserProjects = require('./Projects').getUserProjects;

module.exports.getAllArticles = require('./Articles').getTopArticles;
module.exports.getTopSixArticles = require('./Articles').getTopSixArticles;
