import React, { Component } from 'react';

class Genres extends Component {
  render() {
    return (
      <div className="movie-card__genres-container">
        {(this.props?.Movie?.genres &&
          this.props?.Movie?.genres?.map((item, index) => <div className="movie-card__genres">{item.name}</div>)) || (
          <div className="movie-card__genres">plugs</div>
        )}
      </div>
    );
  }
}

export default Genres;
