const rp = require('request-promise');

module.exports = (req, res) => {
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
    console.log('error', error);
    res.status(404).send('ERROR', error);
  });
}