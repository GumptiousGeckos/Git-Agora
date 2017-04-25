import React from 'react';
import { connect } from 'react-redux';
import fetchContributors from './contributorsActions';
import ContributorsEntryView from './ContributorsEntryView.jsx';

class ContributorsView extends React.Component {
  componentDidMount() {
    const { fetchContributors, q, q_id } = this.props;
    fetchContributors(q, q_id);
  }

  render() {
    const { contributors } = this.props;
    return (
      <div className="text-center bordered">
        <h4 className="underline">Top Contributors</h4>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            { contributors.length > 0 ?
              contributors.map(contributor => (
                <tr>
                  <td>{contributor.username}</td>
                  <td>{contributor.dev_points}</td>
                </tr>
              )) : ''
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    ...state.contributors
  }
);
const mapDispatchToProps = dispatch => (
  {
    fetchContributors: (q, id) => {
      dispatch(fetchContributors(q, id));
    }
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(ContributorsView);
