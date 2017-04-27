import React from 'react';
import { connect } from 'react-redux';


import UserProjects from './UserProjects.jsx';
import UserDetails from './UserDetails.jsx';
import UserFavorites from '../Favorites/UserFavorites.jsx';

export class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    const { id } = this.props.match.params;
    this.state = {
      renderThis: <UserProjects id={id} />
    }
  }

  componentWillMounts() {
  }

  handleClick(e) {
    const { id } = this.props.match.params;
    let toRender;

    if (e.target.value === 'projects') {
      toRender = <UserProjects id={id} />;
    } else if (e.target.value === 'favorites') {
      toRender = <UserFavorites />;
    } else {
      toRender = <h4 className="tab-title">Contributions</h4>;
    }

    this.setState({ renderThis: toRender })
  }

  render() {
    const { id } = this.props.match.params;
    const { renderThis } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="four columns profile-details">
            <UserDetails id={id} />
          </div>
          <div className="row eight columns">
              <button className="tabs" value="projects" onClick={this.handleClick}>Projects</button>
              <button className="tabs" value="favorites" onClick={this.handleClick}>Favorites</button>
              <button className="tabs" value="contributions" onClick={this.handleClick}>Contributions</button>
            <div className="profile-tab-area">
              <div className="container">
                {renderThis}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);