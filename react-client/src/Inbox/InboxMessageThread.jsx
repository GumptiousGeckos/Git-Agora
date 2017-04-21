import React from 'react';
import InboxMessageEntry from './InboxMessageEntry.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitMessage, inputText } from './inboxActions';

class InboxMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onMessageSubmit, message, user, onTextInput, text } = this.props;
    const receiver = message.users.filter(ele => (ele !== user.username));
    const messageSender = {
      username: user.username,
      id: user.id
    }
    const { header } = message;
    console.log(this.props, receiver);
    return (
      <div>
        <h1> Inbox </h1>
        <Link to="/inbox">
          Back to Inbox
        </Link>
        <div>
          <h2> {header} </h2>
        </div>
        <div id="inbox-messages-list">
          {
            message.messages.map((ele) => {
              return (
                <InboxMessageEntry message={ele} />
              );
            })
          }
          <label>Message: </label>
          <textarea
            type="text"
            className="form-control"
            id="message"
            onChange={e => onTextInput(e.target.value)}
            value={text}
          />
          <button onClick={() => onMessageSubmit(messageSender, receiver, text, message._id)}>
            Send Message
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    message: state.inbox.selectedMessage,
    user: state.navBar.user[0],
    text: state.inbox.messageText
  }
);

const mapDispatchToProps = dispatch => (
  {
    onMessageSubmit: (sender, receiver, message, id) => dispatch(submitMessage(sender, receiver, message, id)),
    onTextInput: text => dispatch(inputText(text))
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(InboxMessage);
