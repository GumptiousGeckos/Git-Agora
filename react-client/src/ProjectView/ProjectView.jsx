import React from 'react';
import { connect } from 'react-redux';

export class ProjectView extends React.Component {

  render() {
    
    const { mainProject } = this.props;

    return (
      <div>
        <div className="col-md-9">
          <div className="bordered text-center">
            <div>
              <h1>{mainProject.title}</h1>
            </div>
            <div>
              <h4>tags placeholder</h4>
            </div>
          </div>
          <div className="text-left bordered">
            <h2>Description:</h2>
            <h3>{mainProject.description}</h3>
            <h4>Github: {mainProject.githubLink}</h4>
          </div>
          <div>
            <h1>COMMENTS SECTION PLACEHOLDER</h1>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center bordered">
            <h1 className="underline">Collaborators</h1>
            {
              mainProject.collaborators && mainProject.collaborators.map((person, index) => 
                <div key={index}>
                  <h3>{person.name}</h3>
                </div>
              )
            }
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center bordered">
            <h1 className="underline">Requirements</h1>
            <h2>{mainProject.requirements}</h2>
            <button
              className="btn btn-success btn-lg"
            >I'm Interested</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mainProject: state.projects.mainProject
  };
};

export default connect(mapStateToProps)(ProjectView);
