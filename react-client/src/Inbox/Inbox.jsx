import React from 'react';
import { connect } from 'react-redux';
import { selectMessage, fetchInbox } from './inboxActions';

export class Inbox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }
  render() {
    return (
      <div>
        <h1> Inbox </h1>
      </div>
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
