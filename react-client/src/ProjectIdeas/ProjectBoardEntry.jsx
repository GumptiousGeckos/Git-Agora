import React from 'react';

export default (props) => (
  <div 
    style={{"borderStyle": "solid", "borderWidth": "1px", "overflow": "hidden"}}
  >
    <div style={{float: "left", "borderStyle": "solid", width: "10%"}}>
      <p>RATINGS</p>
      <p>LIKES</p>
      <p>DISLIKES</p>  
    </div>
    <div 
      style={{float: "left", "marginLeft": "10px", borderStyle: "solid", width: "80%"}}
      onClick={() => {props.onClick()}}
    >
      <h1>{props.post.title}</h1>
      <h2>{props.post.description}</h2>
    </div>
  </div>
);