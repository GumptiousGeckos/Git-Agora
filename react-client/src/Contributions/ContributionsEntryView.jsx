import React from 'react';

const ContributionsEntryView = props => {
  const { contribution } = props;
  return (
    <div>
      {contribution.username} - {contribution.title}
    </div>
  );
};

export default ContributionsEntryView;
