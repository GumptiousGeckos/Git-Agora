import React from 'react';
import { connect } from 'react-redux';
import { backToRepos, projectDescription } from './projectSubmissionActions';

export const ProjectSubmission = (props) => {
  const { backButtonClick, inputDescription } = props;
  console.log(props);
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
      <button> Share Project! </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selected: state.createproject.selectedRepo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputDescription: (description) => { dispatch(projectDescription(description)); },
    backButtonClick: () => {dispatch(backToRepos())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSubmission);
