import React from 'react';
import TimeAgo from 'react-timeago';

const ContributionsEntryView = props => {
  const { contribution } = props;
  console.log(contribution);
  return (
    <tr>
      <td className="contributions-table-data">
        <TimeAgo date={contribution.updated_at} live={false} />
      </td>
      <td className="contributions-table-data">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`/#/users/${contribution.user_id}`}
        >
          {contribution.username}
        </a>
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

export default ContributionsEntryView;
