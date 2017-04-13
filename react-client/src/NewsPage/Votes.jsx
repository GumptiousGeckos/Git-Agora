import React from 'react';

export default (props) => (
  <div className="text-center col-lg-1 col-md-1 col-sm-2 col-xs-2">

    <button className="btn btn-lg btn-block">
      <span>{props.likes} </span>
      <span className="glyphicon glyphicon-triangle-top" />
    </button>
    <button className="btn btn-lg btn-block">
      <span>{props.dislikes} </span>
      <span className="glyphicon glyphicon-triangle-bottom" />
    </button>
  </div>
);