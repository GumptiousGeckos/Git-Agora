import React from 'react';
import { connect } from 'react-redux';

import CommentEntry from './CommentEntry.jsx';
import { insertComment, fetchComments, updateCommentText } from './commentActions';

export class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const { getComments, projectId, type } = this.props;
    getComments(projectId, type);
  }


  handleSubmit(e) {
    e.preventDefault();
    const { addComment, type, projectId, content } = this.props;
    // hard coded userId here, need to change/integrate with Github Auth
    let user_id = 2;
    let date_created = new Date().toDateString();
    addComment(projectId, type, user_id, date_created, content);
  }


  render () {
    const { comments, updateCommentText } = this.props;    
    return (
      <div>
        <div>
          {comments && comments.map(comment => <div><CommentEntry comment={comment}/></div>)}
        </div>
        <form>
          <input onChange={(e) => {updateCommentText(e.target.value); }}type="textbox"></input>
          <button onClick={this.handleSubmit}>Add Comment</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments,
    content: state.comments.content
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (topic_id, type) => dispatch(fetchComments(topic_id, type)),
    addComment: (topic_id, type, user_id, date_created, content) => dispatch(insertComment(topic_id, type, user_id, date_created, content)),
    updateCommentText: (text) => dispatch(updateCommentText(text))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
