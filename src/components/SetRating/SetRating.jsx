import React, { Component } from 'react';
import { Rate } from 'antd';

class SetRating extends Component {
  setRate(value) {
    this.props.setRatingThunk(this.props.Movie.id, value);
  }
  render() {
    return (
      <Rate
        onChange={(value) => this.setRate(value)}
        style={{ lineHeight: '25px' }}
        count={10}
        value={this.props.Movie.rating}
        allowHalf
        defaultValue={0}
      />
    );
  }
}

export default SetRating;
