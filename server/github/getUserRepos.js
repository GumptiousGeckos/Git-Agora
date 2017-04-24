const rp = require('request-promise');

module.exports = (req, res) => {
  if (req.isAuthenticated()) {
    rp({
      uri: 'https://api.github.com/user/repos',
      headers: {
        'User-Agent': 'git-agora',
        Authorization: `token ${req.cookies.git_token}`
      },
      qs: {
        sort: 'updated',
        visibility: 'public',
        per_page: '100'
      },
      json: true
    })
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      res.status(404).send('ERROR', error);
    });
  } else {
    res.status(401).send('Please login to access this feature');
  }
};
