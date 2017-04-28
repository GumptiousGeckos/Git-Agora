import React from 'react';
import { connect } from 'react-redux';
import fetchContributions from './contributionsActions';
import ContributionsEntryView from './ContributionsEntryView.jsx';

class ContributionsView extends React.Component {
  componentDidMount() {
    const { getContributions, reqtype, projid } = this.props;
    getContributions(reqtype, projid);
  }

  render() {
    const { contributions } = this.props;
    if (contributions.length > 0) {
      return (
        <table id="contributions-table">
          <tbody id="contributions-table-body">
            {contributions.length > 0 && contributions.map(contribution => (
              <ContributionsEntryView contribution={contribution} />
            ))}
          </tbody>
        </table>
      )
    } else {
      return (
        <div> No recent contributions! </div>
      );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ContributionsView);
