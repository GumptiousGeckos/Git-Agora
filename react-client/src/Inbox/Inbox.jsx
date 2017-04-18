import React from 'react';
import { connect } from 'react-redux';
import { selectMessage, fetchInbox } from './inboxActions';

export class Inbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = state => (
  {
    ...state.inbox
  }
);

const mapDispatchToProps = dispatch => (
  {
    onMessageClick: message => (dispatch(selectMessage(message))),
    fetch: () => (dispatch(fetchInbox()))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
