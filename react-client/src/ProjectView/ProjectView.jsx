import React from 'react';
import { connect } from 'react-redux';

import CommentSection from '../CommentSection/CommentSection.jsx';
import CollaboratorsList from './CollaboratorsList.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import { getProjectById, getCollaborators, getProjectTags } from './projectViewActions';

export class ProjectView extends React.Component {

  componentWillMount() {
    const { getProjectById, getCollaborators, getProjectTags, match } = this.props;
    getProjectById(match.params.id);
    getCollaborators(match.params.id);
    getProjectTags(match.params.id);
  }

  render() {
    const { project, collaborators, tags } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <div className="col-md-9">
          <ProjectDetails
            project={project}
            tags={tags}
          />
          <div>
            <CommentSection
              projectId={id}
              type={'project'}
            />
          </div>
        </div>
        <div className="col-md-3">
          <CollaboratorsList
            collaborators={collaborators}
          />
        </div>
        <div className="col-md-3">
          <div className="text-center bordered">
            <h1 className="underline">Interested</h1>
            <h2>{project.interested}</h2>
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
    project: state.project.project,
    collaborators: state.project.collaborators,
    tags: state.project.tags
  }
);

const mapDispatchToProps = dispatch => (
  {
    getProjectById: id => dispatch(getProjectById(id)),
    getCollaborators: id => dispatch(getCollaborators(id)),
    getProjectTags: id => dispatch(getProjectTags(id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);
