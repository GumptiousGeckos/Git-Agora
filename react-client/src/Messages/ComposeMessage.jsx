import React from 'react';
import { connect } from 'react-redux';
import { sendNewMessage, headerInput, bodyInput, receiverInput } from './messageActions';

const ComposeMessage = (props) => {
  const { sender, receiver, body, header,
          onSendClick, onReceiverInput, onHeaderInput,
          onMessageBodyInput, toggle } = props;
  return (
    <div className="form-group compose-message">
      <div className="message-receiver">
        <label htmlFor="new-message-receiver"> To: </label>
        <input
          className="form-control"
          id="new-message-receiver"
          value={receiver}
          onChange={e => onReceiverInput(e.target.value)}
        />
      </div>
      <div className="message-header">
        <label htmlFor="new-message-header">Subject: </label>
        <input
          className="form-control"
          id="new-message-header"
          value={header}
          onChange={e => onHeaderInput(e.target.value)}
        />
      </div>
      <div className="message-body">
        <label htmlFor="new-message-body">Message: </label>
        <textarea
          className="form-control"
          id="new-message-body"
          value={body}
          onChange={e => onMessageBodyInput(e.target.value)}
        />
      </div>
      <div className="newline"> {' '} </div>
      <button
        onClick={() => {
          const receiverObj = { username: receiver };
          onSendClick(sender, receiverObj, header, body);
          toggle();
        }}
      >
        Send Message
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => (
  {
    onSendClick: (sender, receiver, header, text) => {
      dispatch(sendNewMessage(sender, receiver, header, text));
    },
    onReceiverInput: text => dispatch(receiverInput(text)),
    onHeaderInput: text => dispatch(headerInput(text)),
    onMessageBodyInput: text => dispatch(bodyInput(text))
  }
);

export default connect(null, mapDispatchToProps)(ComposeMessage);
