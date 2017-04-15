import React from 'react';

const RepoListEntry = (props) => {
  const { full_name, hooks_url } = props.repo;
  return (
    <div onClick={()=>props.handleClick(props.repo)}>
      <span id={hooks_url}>{full_name}</span>
    </div>
  );
};

export default RepoListEntry;
