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
    const upVoteButton = <div className="upvote-green" onClick={()=>{ vote(user, -1, type, topic_id, userVote)}}><span className="fa fa-chevron-up fa-2x" /></div>
    const downVoteButton = <div className="downvote-red" onClick={()=>{ vote(user, 1, type, topic_id, userVote)}}><span className="fa fa-chevron-down fa-2x" /></div>
    const neutralUpVoteButton = <div className="upvote" onClick={()=>{ vote(user, 1, type, topic_id, userVote)}}><span className="fa fa-chevron-up fa-2x" /></div>
    const neutralDownVoteButton = <div className="downvote" onClick={()=>{ vote(user, -1, type, topic_id, userVote)}}><span className="fa fa-chevron-down fa-2x" /></div>
    return (
      <div className="text-center two columns vote">

        {(this.props.user && userVote === 1) ? upVoteButton : neutralUpVoteButton}
        <div className="vote-total">{totalVotes}</div>
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