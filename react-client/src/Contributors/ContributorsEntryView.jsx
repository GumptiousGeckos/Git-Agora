import React from 'react';

const ContributorEntryView = (props) => {
  const { contributor } = props;
  return (
    <tr>
      <td>{contributor.username}</td>
      <td>{contributor.dev_points}</td>
    </tr>
  );
};

export default ContributorEntryView;
