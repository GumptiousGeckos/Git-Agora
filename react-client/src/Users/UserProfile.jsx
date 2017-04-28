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
      renderThis: <UserProjects id={id} />,
      activeTab: 'projects'
    }
  }

  componentWillMounts() {
  }

  handleClick(e) {
    const { id } = this.props.match.params;
    let toRender;

    if (e.target.value === 'projects') {
      this.setState({ activeTab: 'projects' });
      toRender = <UserProjects id={id} />;
    } else if (e.target.value === 'favorites') {
      this.setState({ activeTab: 'favorites' });
      toRender = <UserFavorites />;
    } else {
      this.setState({ activeTab: 'contributions' });
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
              <button className={'profile-tabs ' + (this.state.activeTab === 'projects' ? 'active-tab-prof' : '' )} value="projects" onClick={this.handleClick}>Projects</button>
              <button className={'profile-tabs ' + (this.state.activeTab === 'favorites' ? 'active-tab-prof' : '' )} value="favorites" onClick={this.handleClick}>Favorites</button>
              <button className={'profile-tabs ' + (this.state.activeTab === 'contributions' ? 'active-tab-prof' : '' )} value="contributions" onClick={this.handleClick}>Contributions</button>
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