import React, {Component} from 'react';
import PropTypes from "prop-types";

class AverRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.VoteAverage > 7 ? `#66E900` : this.props.VoteAverage > 5 ? `#E9D100` : this.props.VoteAverage > 3 ? `#E97E00` : `#E90000`
        };
    }


    render() {
        return (
            <div>
                <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17" cy="17" r="16" stroke={this.state.color} strokeWidth="2"/>
                    <text x="17" y="17" textAnchor="middle" dominantBaseline="middle" fontSize="50px" fill="black">
                        {this.props.VoteAverage.toFixed(1)}
                    </text>
                </svg>
            </div>
        );
    }
}

AverRating.propTypes = {
    VoteAverage: PropTypes.number
}

AverRating.defaultProps = {
    VoteAverage: 0
}

export default AverRating;