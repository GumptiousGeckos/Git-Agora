import React from 'react';
import { vote } from './votesActions.js';
import { connect } from 'react-redux';

class Vote extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
  }

  render() {
    const { vote } = this.props;
    const userVote = this.props.vote_type || 0;
    const type = this.props.topic_type;
    const totalVotes = this.props.votes;
    const user = this.props.user;
    const topic_id = this.props.topic_id;
    const upVoteButton = <button className="btn btn-lg btn-block btn-success" onClick={()=>{ vote(user, -1, type, topic_id, userVote)}}><span className="glyphicon glyphicon-triangle-top" /></button>
    const downVoteButton = <button className="btn btn-lg btn-block btn-danger" onClick={()=>{ vote(user, 1, type, topic_id, userVote)}}><span className="glyphicon glyphicon-triangle-bottom" /></button>
    const neutralUpVoteButton = <button className="btn btn-lg btn-block" onClick={()=>{ vote(user, 1, type, topic_id, userVote)}}><span className="glyphicon glyphicon-triangle-top" /></button>
    const neutralDownVoteButton = <button className="btn btn-lg btn-block" onClick={()=>{ vote(user, -1, type, topic_id, userVote)}}><span className="glyphicon glyphicon-triangle-bottom" /></button>
    return (
      <div className="text-center col-lg-1 col-md-1 col-sm-2 col-xs-2">

        {(this.props.user && userVote === 1) ? upVoteButton : neutralUpVoteButton}
        <div>{totalVotes}</div>
        {(this.props.user && userVote === -1) ? downVoteButton : neutralDownVoteButton}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.navBar.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    vote: (user, vote_type, type, topic_id, userVote) => {dispatch(vote(user, vote_type, type, topic_id, userVote))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);