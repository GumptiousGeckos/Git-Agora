import React from 'react';

export default (props) => (
  <div>
    <button>^</button>
    Likes: {props.likes}
    <br />
    <button>v</button>
    Dislikes: {props.dislikes}
  </div>
);