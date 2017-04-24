import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { selectMessage, fetchInbox } from './inboxActions';
import InboxThreadEntry from './InboxThreadEntry.jsx';
import ComposeMessageButton from '../Messages/ComposeMessageButton.jsx';
import InboxMessageThread from './InboxMessageThread.jsx';

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
    const { messages, onMessageClick, user } = this.props;
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
        <Modal isOpen={this.state.isOpen}>
          <button onClick={this.toggle}> Back To Inbox </button>
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
    fetch: () => dispatch(fetchInbox())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
