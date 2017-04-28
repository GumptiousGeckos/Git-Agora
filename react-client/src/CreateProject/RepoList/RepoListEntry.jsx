import React from 'react';
import Octicons from 'octicons';

const RepoListEntry = (props) => {
  const { full_name, hooks_url } = props.repo;
  const { active } = props;
  const repoIcon = Octicons.repo.toSVG();
  return (
    <div
      className={active ? 'repo-list-entry createproject-repolist-select' : 'repo-list-entry'}
      onClick={() => props.handleClick(props.repo)}
      role="button"
      id={hooks_url}
    >
      <span className="repo-list-icon">
        <svg
          version="1.1"
          width="12"
          height="16"
          viewBox="0 0 12 16"
          className="octicon octicon-repo"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
          />
        </svg>
      </span>
      <span className="repo-list-entry-name">{ full_name }</span>
    </div>
  );
};

export default RepoListEntry;
