import React from 'react';

export const ProjectSubmission = (props) => {
  return (
    <div>
      <h1> Project Submission </h1>
      <div className="form-group">
        <label htmlFor="projname">Project Name:</label>
        <input type="text" className="form-control" id="projname" />
        <label htmlFor="projdesc">Description:</label>
        <textarea type="text" className="form-control" id="projdesc" />
      </div>
      <button> Share Project! </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default ProjectSubmission;
