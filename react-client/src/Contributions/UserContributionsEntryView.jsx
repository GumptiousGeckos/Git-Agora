import React from 'react';
import TimeAgo from 'react-timeago';

const UserContributionsEntryView = props => {
  const { contribution } = props;
  return (
    <tr>
      <td className="contributions-table-data">
        <TimeAgo date={contribution.updated_at} live={false} />
      </td>
      <td className="contributions-table-data">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={contribution.url}
        >
          {contribution.title}
        </a>
      </td>
    </tr>
  );
};

export default UserContributionsEntryView;
