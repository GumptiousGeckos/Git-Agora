import React from 'react';
import { connect } from 'react-redux';
import fetchContributions from './contributionsActions';
import UserContributionsEntryView from './UserContributionsEntryView.jsx';

class UserContributionsView extends React.Component {
  componentDidMount() {
    const { getContributions, reqtype, userid } = this.props;
    getContributions(reqtype, userid);
  }

  render() {
    const { contributions } = this.props;
    return (
      <table id="contributions-table">
        <tbody id="contributions-table-body">
          {contributions.length > 0 && contributions.map(contribution => (
            <UserContributionsEntryView contribution={contribution} />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => (
  {
    ...state.contributions
  }
);
const mapDispatchToProps = dispatch => (
  {
    getContributions: (type, id) => dispatch(fetchContributions(type, id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserContributionsView);
