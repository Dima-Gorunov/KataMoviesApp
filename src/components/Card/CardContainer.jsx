import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDetailsData, setMovieGenresThunk } from '../../store/Slice/MovieSlice';
import { getActivePage, getMoviesLoad } from '../../store/Selectors/MovieSelector';

import Card from './Card';
import CardLoader from './CardLoader';

class CardContainer extends Component {
  componentDidMount() {
    this.props.setMovieGenresThunk(this.props.Movie.id, this.props.Movie.genre_ids);
  }

  componentDidUpdate(prevProps) {}

  render() {
    if (this.props.MoviesLoad) {
      return <CardLoader />;
    }
    return <Card {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    ActivePage: getActivePage(state),
    MoviesLoad: getMoviesLoad(state),
  };
};

export default connect(mapStateToProps, { getDetailsData, setMovieGenresThunk })(CardContainer);
