import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setRatingThunk } from '../../store/Slice/MovieSlice';

import SetRating from './SetRating';

class SetRatingContainer extends Component {
  render() {
    return <SetRating {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setRatingThunk })(SetRatingContainer);
