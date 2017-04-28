import React from 'react';
import ThreadMessageEntry from './ThreadMessageEntry.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitMessage, inputText } from './inboxActions';

const InboxMessage = (props) => {
  const { onMessageSubmit, message, user, onTextInput, text } = props;
  const users = message.users || [];
  const receiver = users.filter(ele => (ele !== user.username));
  const messageSender = {
    username: user.username,
    id: user.id
  };
  const { header } = message;
  return (
    <div>
      <div>
        <h4> {header} </h4>
      </div>
      <label htmlFor="message-input-field">Message: </label>
      <textarea
        type="text"
        className="u-full-width"
        id="message-input-field"
        onChange={e => onTextInput(e.target.value)}
        value={text}
      />
      <button onClick={() => onMessageSubmit(messageSender, receiver, text, message._id)}>
        Send Message
      </button>
      <div id="inbox-messages-list">
        {
          message.messages.map(ele => (
            <ThreadMessageEntry message={ele} />
          ))
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => (
  {
    message: state.inbox.selectedMessage,
    user: state.navBar.user,
    text: state.inbox.messageText
  }
);
const mapDispatchToProps = dispatch => (
  {
    onMessageSubmit: (sender, receiver, message, id) => {
      dispatch(submitMessage(sender, receiver, message, id));
    },
    onTextInput: text => dispatch(inputText(text))
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(InboxMessage);
