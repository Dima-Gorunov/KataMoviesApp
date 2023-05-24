import React, {Component} from 'react';
import {Rate} from 'antd';

class SetRating extends Component {
    setRate(value) {
        this.props.setRatingThunk(this.props.Movie.id, value)
    }

    hoverChange() {
        console.log(this.props.Movie.success_vote)
    }

    render() {
        return (
            <Rate onHoverChange={() => this.hoverChange()} onChange={(value) => this.setRate(value)} style={{lineHeight: "25px"}}
                  count={10} allowHalf
                  defaultValue={this.props.Movie.rating || 0}/>
        )
    }
}

export default SetRating;