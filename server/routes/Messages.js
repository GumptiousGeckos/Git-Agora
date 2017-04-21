const Message = require('./../../mongodb/Message');

module.exports.getMessages = (req, res) => {
  const { q, user } = req.query;
  console.log(q, req.user[0].username);
  if (q === 'all') {
    return Message.find({ users: req.user[0].username })
    // Message.find({ users: user })
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((error) => {
      console.log(error);
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
      messages: [message]
    });
    newMessage.save()
    .then(() => res.end())
    .catch(error => res.send(error));
  } else if (type === 'reply') {
    const { id } = req.body;
    Message.findOneAndUpdate({ _id: id }, { $push: { messages: message } })
    .then(() => res.end())
    .catch(error => res.send(error));
  } else {
    res.end();
  }
};
