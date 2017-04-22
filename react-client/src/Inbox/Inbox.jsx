import React from 'react';
import { connect } from 'react-redux';
import { selectMessage, fetchInbox } from './inboxActions';
import InboxThreadEntry from './InboxThreadEntry.jsx';

export class Inbox extends React.Component {

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }
  render() {
    const { messages, onMessageClick, user } = this.props;
    return (
      <div>
        <h1> Inbox </h1>
        <div id="inbox-group" className="list-group">
          {
            messages.map(message => (
              <InboxThreadEntry
                message={message}
                user={user}
                onMessageClick={onMessageClick}
              />
            ))
          }
        </div>
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
