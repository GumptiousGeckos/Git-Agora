import React from 'react';

const RepoListEntry = (props) => {
  const { full_name, hooks_url } = props.repo;
  const { active } = props;
  return (
    <div>
      <button
        className={active ? 'createproject-repolist-select' : 'createproject-repolist-regular'}
        onClick={() => props.handleClick(props.repo)}
        id={hooks_url}
      >{full_name}</button>
    </div>
  );
};

export default RepoListEntry;
