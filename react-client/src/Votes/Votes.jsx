import React { Component } from 'react';

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalVotes: null,
      userVote: null,
    };
  }

  componentDidMount() {
    const userVote = props.userVote || 0;
    this.setState({
      totalVotes: props.totalVotes,
      userVote: userVote,
    });
  }

  render() {
    const upVoteButton = <button className="btn btn-lg btn-block green-button" ><span className="glyphicon glyphicon-triangle-top" /></button>
    const downVoteButton = <button className="btn btn-lg btn-block"><span className="glyphicon glyphicon-triangle-bottom" /></button>
    const neutralUpVoteButton = <button className="btn btn-lg btn-block"><span className="glyphicon glyphicon-triangle-top" /></button>
    const neutralDownVoteButton = <button className="btn btn-lg btn-block red-button"><span className="glyphicon glyphicon-triangle-bottom" /></button>
    return (
      <div className="text-center col-lg-1 col-md-1 col-sm-2 col-xs-2">

        <button className="btn btn-lg btn-block">
          <span className="glyphicon glyphicon-triangle-top" />
        </button>
        <div>{props.likes}</div>
        <button className="btn btn-lg btn-block">
          <span className="glyphicon glyphicon-triangle-bottom" />
        </button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {

};