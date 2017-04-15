import React { Component } from 'react';

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="text-center col-lg-1 col-md-1 col-sm-2 col-xs-2">

        <button className="btn btn-lg btn-block">
          <span className="glyphicon glyphicon-triangle-top" />
        </button>
        <div>{props.likes}</div>
        <button className="btn btn-lg btn-block">
          <span className="glyphicon glyphicon-triangle-bottom" />
        </button>
      </div>
    )
  }
};

const mapStateToProps = () => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {

};