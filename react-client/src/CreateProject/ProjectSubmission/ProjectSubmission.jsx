import React from 'react';
import { connect } from 'react-redux';
import { backToRepos, projectDescription, submitProject } from './projectSubmissionActions';

export const ProjectSubmission = (props) => {
  const { name, description, backButtonClick, inputDescription, submitProjectClick } = props;
  const { hooks_url, html_url, id } = props.selected;
  return (
    <div>
      <h1> Project Submission </h1>
      <div className="form-group">
        <label htmlFor="projname">Project Name:</label>
        <input type="text" className="form-control" id="projname" value={props.selected.name}/>
        <label htmlFor="projdesc">Description:</label>
        <textarea type="text" className="form-control" id="projdesc" 
        onChange={(e)=>inputDescription(e.target.value)}/>
      </div>
      <button onClick={()=> backButtonClick()}> Back to Select Repo </button>
      <button onClick={
        () => { submitProjectClick(name, id, description, html_url, hooks_url) }
      }> Share Project! </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selected: state.createproject.selectedRepo,
    name: state.createproject.name,
    description: state.createproject.description
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputDescription: (description) => { dispatch(projectDescription(description)); },
    backButtonClick: () => { dispatch(backToRepos()) },
    submitProjectClick: (name, projectId, description, link, webhook) => {
      dispatch(submitProject(name, projectId, description, link, webhook));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSubmission);
