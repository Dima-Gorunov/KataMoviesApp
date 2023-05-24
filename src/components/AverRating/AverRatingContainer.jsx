import React, {Component} from 'react';
import AverRating from "./AverRating";
import {connect} from "react-redux";

class AverRatingContainer extends Component {
    render() {
        return <AverRating {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(AverRatingContainer);