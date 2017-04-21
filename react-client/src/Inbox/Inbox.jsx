import React from 'react';
import { connect } from 'react-redux';
import { selectMessage, fetchInbox } from './inboxActions';
import { Link } from 'react-router-dom';

export class Inbox extends React.Component {

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }
  render() {
    const { messages, onMessageClick, user } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1> Inbox </h1>
        <div id="inbox-group" className="list-group">
          {
          messages.map(message => (
            <Link to={'/inbox/' + message._id} key={message._id} >
              <button
                className="list-group-item"
                type="button"
                onClick={() => onMessageClick(message)}
              >
                <h4> {message.header} - Last Message on {message.messages[message.messages.length - 1].timeSent} </h4>
                <h4>
                  Users: { message.users.filter(ele => ele !== user) }
                </h4>
              </button>
            </Link>
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
    user: state.navBar.user[0].username
  }
);

const mapDispatchToProps = dispatch => (
  {
    onMessageClick: message => dispatch(selectMessage(message)),
    fetch: () => dispatch(fetchInbox())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
