module.exports = (req, res) => {
  res.cookie('git_token', req.token);
  res.redirect('/');
};
