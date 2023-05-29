import React, { Component } from 'react';

import CardContainer from '../Card/CardContainer';

class CardItems extends Component {
  render() {
    return (
      <div className="cards-items-container">
        {this.props.Movies.map((movie, index) => (
          <CardContainer Movie={movie} key={`card ${index}`} />
        ))}
      </div>
    );
  }
}

export default CardItems;
