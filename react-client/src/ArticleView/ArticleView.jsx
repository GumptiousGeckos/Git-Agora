import React from 'react';
import { connect } from 'react-redux';
import CommentSection from '../CommentSection/CommentSection.jsx';
import Votes from '../Votes/Votes.jsx';
import { getArticleById } from './articleActions.js';

export class ArticleView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { getArticleById, match } = this.props;
    getArticleById(match.params.id);
  }

  render() {
    let { votes, title, url, source, description, vote_type, id } = this.props.article;
    return (
      <div>
        <div className="col-md-12">
          <div>
            <Votes votes={votes} topic_type={'article'} vote_type={vote_type} topic_id={id}/>
            <div className="col-md-9">
              <a href={url}>
                <h1>{title}</h1>
              </a>
              <h4>{description}</h4>
              <h4>{source}</h4>
            </div>
          </div>
          <div className="col-md-12">
            <CommentSection
              projectId={id}
              type={'article'}/>
          </div>
        </div>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.article.article
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticleById: id => dispatch(getArticleById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);