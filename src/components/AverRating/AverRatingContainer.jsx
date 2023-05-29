import React, { Component } from 'react';
import { connect } from 'react-redux';

import AverRating from './AverRating';

class AverRatingContainer extends Component {
  render() {
    return <AverRating {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(AverRatingContainer);
