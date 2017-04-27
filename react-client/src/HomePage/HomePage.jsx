import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHotProjects, fetchHotNews } from './homepageActions';
import ImageGallery from 'react-image-gallery';
import NewsImageGallery from './NewsImageGallery.jsx';
import HomePageProjectEntry from './HomePageProjectEntry.jsx';



export class HomePage extends React.Component {

  componentWillMount() {
    const { getHotProjects, getHotNews } = this.props;
    getHotProjects();
    getHotNews();
  }

  render() {
    const { hotProjects, hotNews} = this.props;

    return (
      <div>
      <div className="container">
        <div className="row news-image-gallery-row">
          <NewsImageGallery hotNews={hotNews} />
        </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="twelve columns">
          <div className="projects-header">Hot Projects</div>
        </div>
      </div>
        <div className="row">
          <div className="top-three-projects four columns ">
          {hotProjects.slice(0, 3).map(project => <HomePageProjectEntry project={project}/>)}
          </div>
          <div className="top-three-projects four columns ">
          {hotProjects.slice(3, 6).map(project => <HomePageProjectEntry project={project}/>)}
          </div>
          <div className="top-three-projects four columns ">
          {hotProjects.slice(6, 9).map(project => <HomePageProjectEntry project={project}/>)}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    hotProjects: state.homepage.hotProjects,
    hotNews: state.homepage.hotNews
  }
);

const mapDispatchToProps = dispatch => (
  {
    getHotProjects: () => dispatch(fetchHotProjects()),
    getHotNews: () => dispatch(fetchHotNews())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
