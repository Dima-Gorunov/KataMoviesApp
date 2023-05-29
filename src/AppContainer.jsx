import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';
import { getAllGenresThunk, getRatedMoviesInfoThunk } from './store/Slice/MovieSlice';
import { createGuestSessionThunk, testThunk } from './store/Slice/AuthSlice';
class AppContainer extends Component {
  componentDidMount() {
    this.props.getRatedMoviesInfoThunk();
    this.props.createGuestSessionThunk();
    this.props.getAllGenresThunk();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  createGuestSessionThunk,
  getAllGenresThunk,
  getRatedMoviesInfoThunk,
  testThunk,
})(AppContainer);
