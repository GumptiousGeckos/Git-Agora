module.exports = (req, res) => {
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
