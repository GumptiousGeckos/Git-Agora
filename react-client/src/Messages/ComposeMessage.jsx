import React from 'react';
import { connect } from 'react-redux';
import { sendNewMessage, headerInput, bodyInput } from './messageActions';

const ComposeMessage = (props) => {
  const { sender, receiver, text, header, onSendClick, onHeaderInput, onMessageBodyInput } = props;
  return (
    <div className="compose-message">
      <label htmlFor="new-message-header">Header: </label>
      <input
        id="new-message-header"
        onChange={e => onHeaderInput(e.target.value)}
      />
      <label htmlFor="new-message-body">Message: </label>
      <textarea
        id="new-message-body"
        onChange={e => onMessageBodyInput(e.target.value)}
      />
      <button
        onClick={() => onSendClick(sender, receiver, header, text)}
      >
        Send Message
      </button>
    </div>
  );
};

const mapStateToProps = state => (
  {
    sender: state.navBar.user,
    text: state.message.body,
    header: state.message.header
  }
);
const mapDispatchToProps = dispatch => (
  {
    onSendClick: (sender, receiver, text) => dispatch(sendNewMessage(sender, receiver, text)),
    onHeaderInput: text => dispatch(headerInput(text)),
    onMessageBodyInput: text => dispatch(bodyInput(text))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ComposeMessage);
