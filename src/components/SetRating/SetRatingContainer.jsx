import React, {Component} from 'react';
import {connect} from "react-redux";
import SetRating from "./SetRating";
import {setRatingThunk} from "../../ReduxToolkit/Slice/MovieSlice";

class SetRatingContainer extends Component {

    render() {
        if (this.props.Movie.success_vote) {
            return <div style={{marginBottom:"20px", fontSize:"12px", color:"red"}}>{this.props.Movie.status_message}</div>
        }
        return <SetRating {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {setRatingThunk})(SetRatingContainer);