import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { selectMessage, fetchInbox, deleteMessage } from './inboxActions';
import InboxThreadEntry from './InboxThreadEntry.jsx';
import ComposeMessageButton from '../Messages/ComposeMessageButton.jsx';
import InboxMessageThread from './InboxMessageThread.jsx';
import ThreadModalStyles from './ThreadModalStyles';

export class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      fetch();
    }
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const { messages, onMessageClick, onDeleteClick, user } = this.props;
    return (
      <div>
        <h1> Inbox </h1>
        <ComposeMessageButton />
        <div id="inbox-group" className="list-group">
          {
            messages.map(message => (
              <InboxThreadEntry
                message={message}
                user={user}
                onMessageClick={onMessageClick}
                toggle={this.toggle}
              />
            ))
          }
        </div>
        <Modal
          style={ThreadModalStyles}
          isOpen={this.state.isOpen}
        >
          <div className="row">
            <button onClick={this.toggle}> Back To Inbox </button>
            <span> {'   '} </span>
            <button
              id="delete-button"
              onClick={() => {
                if (confirm('Delete this message?')) {
                  this.toggle();
                  onDeleteClick(this.props.selectedMessage._id);
                }
              }}
            > Delete Message </button>
          </div>
          <InboxMessageThread />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    ...state.inbox,
    user: state.navBar.user.username
  }
);

const mapDispatchToProps = dispatch => (
  {
    onMessageClick: message => dispatch(selectMessage(message)),
    onDeleteClick: id => dispatch(deleteMessage(id)),
    fetch: () => dispatch(fetchInbox())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
