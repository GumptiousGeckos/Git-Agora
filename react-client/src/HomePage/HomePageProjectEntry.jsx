import React from 'react';
import { Link } from 'react-router-dom';

class HomePageProjectEntry extends React.Component {
  constructor (props) {
    super (props)
  } 

  render () {
    const { id, title, avatar, description, username, tags } = this.props.project;
    let tagArray = tags ? tags.split(',') : [];
    if (tagArray.length > 0) {
      tagArray = tagArray.splice(0, 5);
    }

    return (
      <div className="home-page-project-entry">
        <Link to={'/projects/' + id} key={id}>
        <div className="home-page-project-entry-header">
        <div className="home-page-project-entry-title">{title}</div>
        </div>
        <div className="home-page-project-entry-tags">
            {
              tagArray.length === 0 ? <span className="project-entry-tag">none</span> :
              tagArray.map((tag, index) =>
                <span className="project-entry-tag" key={index}>{tag}</span>
              )
            }
        </div>
        <div className="home-page-project-entry-description">Description: <br /> {description}</div>
        <div className="home-page-project-entry-username">{username}</div>
        </Link>
      </div>
    )
  }
}

export default HomePageProjectEntry;