import React from 'react';
import { connect } from 'react-redux';
import fetchContributions from './contributionsActions';
import ContributionEntryView from './ContributionEntryView';

class ContributionsView extends React.Component {
  componentDidMount() {
    const { type, id } = this.props;
    fetch(type, id);
  }

  render() {
    const { contributions } = this.props;
    return (
      <div>
        {contributions.map(contribution => (
          <ContributionEntryView contribution={contribution} />
        ))}
      </div>
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
    fetch: (type, id) => dispatch(fetchContributions(type, id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ContributionsView);
