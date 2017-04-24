const Message = require('./../../mongodb/Message');

module.exports.getMessages = (req, res) => {
  const { q } = req.query;
  if (q === 'all') {
    Message.find({ users: req.user[0].username })
    // Message.find({ users: user })
    .then((results) => {
      results.sort((a, b) => a.lastUpdated < b.lastUpdated);
      res.json(results);
    })
    .catch((error) => {
      res.json(error);
    });
  } else {
    res.end();
  }
};

module.exports.postMessages = (req, res) => {
  const { type, header, message } = req.body;
  if (type === 'new') {
    const newMessage = new Message({
      users: [message.sender.username, message.receiver.username],
      header,
      messages: [message],
      lastUpdated: new Date().valueOf()
    });
    newMessage.save()
    .then(() => res.end())
    .catch(error => res.send(error));
  } else if (type === 'reply') {
    const { id } = req.body;
    Message.findOneAndUpdate({ _id: id }, {
      $push: {
        messages: {
          $each: [message],
          $position: 0
        }
      },
      $set: { lastUpdated: new Date().valueOf() }
    })
    .then(() => res.end())
    .catch(error => res.send(error));
  } else {
    res.end();
  }
};

module.exports.putMessages = (req, res) => {
  const { id } = req.body;
  console.log(id);
  Message.findOneAndUpdate({ _id: id }, {
    $pull: { users: req.user[0].username }
  })
  .then(() => res.end())
  .catch(error => res.status(400).send(error));
};
