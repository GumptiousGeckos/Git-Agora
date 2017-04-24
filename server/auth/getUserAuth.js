module.exports = (req, res) => {
  console.log('route working', req.user);
  if (req.user) {
    res.send({
      auth: true,
      user: req.user[0]
    });
  } else {
    res.send({
      auth: false
    });
  }
};
