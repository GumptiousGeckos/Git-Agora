import React from 'react';
import Votes from './Votes.jsx';

export default (props) => (
  <div 
    style={{"borderStyle": "solid", "borderWidth": "1px", "overflow": "hidden"}}
  >
    <div style={{float: "left", "borderStyle": "solid", width: "10%"}}>
      <Votes
        likes={props.project.likes}
        dislikes={props.project.dislikes}
      />
    </div>
    <div 
      style={{float: "left", "marginLeft": "10px", borderStyle: "solid", width: "80%"}}
      onClick={() => {props.onClick()}}
    >
      <h1>{props.project.title}</h1>
      <h2>{props.project.description}</h2>
    </div>
  </div>
);