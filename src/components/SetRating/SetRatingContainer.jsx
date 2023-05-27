import React, {Component} from 'react';
import {connect} from "react-redux";
import SetRating from "./SetRating";
import {setRatingThunk} from "../../store/Slice/MovieSlice";

class SetRatingContainer extends Component {

    render() {
        return <SetRating {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {setRatingThunk})(SetRatingContainer);