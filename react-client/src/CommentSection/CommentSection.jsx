import React from 'react';
import { connect } from 'react-redux';

import CommentEntry from './CommentEntry.jsx';
import { insertComment, fetchComments } from './commentActions';

export class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }
  }

  componentWillMount() {
    const { getComments, projectId, type } = this.props;
    getComments(projectId, type);
  }

  handleChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addComment, type, projectId } = this.props;
    let content = this.state.content;
    // hard coded userId here, need to change/integrate with Github Auth
    let user_id = 3;
    let date_created = new Date().toDateString();
    addComment(projectId, type, user_id, date_created, content);
  }

  render() {
    const { comments } = this.props;

    return (
      <div>
        <div>
          {comments && comments.map(comment => <div><CommentEntry comment={comment}/></div>)}
        </div>
        <form>
          <input onChange={this.handleChange.bind(this)}type="textbox"></input>
          <button onClick={this.handleSubmit.bind(this)}>Add Comment</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (topic_id, type) => dispatch(fetchComments(topic_id, type)),
    addComment: (topic_id, type, user_id, date_created, content) => dispatch(insertComment(topic_id, type, user_id, date_created, content))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
