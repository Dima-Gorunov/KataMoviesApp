import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getActivePage,
  getDetailedMovies,
  getMovies,
  getMoviesLoad,
  getSelectedMenuItem,
} from '../../store/Selectors/MovieSelector';
import { getMoviesThunk, getRatedMoviesThunk } from '../../store/Slice/MovieSlice';
import SpinComp from '../Spin/Spin';
import NoData from '../Spin/NoData';

import CardItems from './CardItems';

class CardItemsContainer extends Component {
  componentDidMount() {
    if (this.props.MenuItem === 'Rated') {
      this.props.getRatedMoviesThunk();
    } else {
      this.props.getMoviesThunk();
    }
  }

  render() {
    if (this.props.MoviesLoad) {
      return <SpinComp />;
    }
    if (!this.props.Movies || this.props.Movies.length === 0) {
      return <NoData />;
    }
    return <CardItems {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    Movies: getMovies(state),
    ActivePage: getActivePage(state),
    MenuItem: getSelectedMenuItem(state),
    MoviesLoad: getMoviesLoad(state),
  };
};

export default connect(mapStateToProps, { getMoviesThunk, getRatedMoviesThunk })(CardItemsContainer);
