import React from 'react';

const ContributorEntryView = (props) => {
  const { contributor } = props;
  return (
    <div>
      {contributor.name}
    </div>
  );
};
