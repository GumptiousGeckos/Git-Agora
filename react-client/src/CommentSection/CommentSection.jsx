import React from 'react';
import { connect } from 'react-redux';

import CommentEntry from './CommentEntry.jsx';
import { addComment, fetchComments } from './commentActions';

export class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      type: 'project',
      topic_id: 3
    }
  }

  componentWillMount() {
    const { getComments } = this.props;
    getComments();
  }

  handleChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  addComment() {
    const { addComment } = this.props;
    addComment();
  }

  render () {

    const { comments } = this.props;

    // console.log('PROPS', this.props);
    return (
      <div>
        <div>
          {comments && comments.map(comment => <div><CommentEntry comment={comment}/></div>)}
        </div>
        <form>
          <input onChange={this.handleChange.bind(this)}type="textbox"></input>
          <button>Add Comment</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: () => dispatch(fetchComments()),
    addComment: () => dispatch(addComment())
  };
};


export default connect (mapStateToProps, mapDispatchToProps)(CommentSection);