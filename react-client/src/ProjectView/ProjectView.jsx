import React from 'react';
import { connect } from 'react-redux';
import CommentSection from '../CommentSection/CommentSection.jsx';
import { getProjectById } from './projectViewActions';

export class ProjectView extends React.Component {

  componentWillMount() {
    const { getProjectById, match } = this.props;
    getProjectById(match.params.id);
  }

  render() {
    const { project } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <div className="col-md-9">
          <div className="bordered text-center">
            <div>
              <h1>{project.title}</h1>
            </div>
            <div>
              <h4>tags placeholder</h4>
            </div>
          </div>
          <div className="text-left bordered">
            <h2>Description:</h2>
            <h3>{project.description}</h3>
            <h4>Github: {project.githubLink}</h4>
          </div>
          <div>
            <CommentSection
              topic_id={id}
              type={'project'}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center bordered">
            <h1 className="underline">Collaborators</h1>
            {
              project.collaborators && project.collaborators.map((person, index) =>
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
            <h2>{project.requirements}</h2>
            <button
              className="btn btn-success btn-lg"
            >{"I'm Interested"}</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    project: state.project.project
  }
);

const mapDispatchToProps = dispatch => (
  {
    getProjectById: id => dispatch(getProjectById(id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);
