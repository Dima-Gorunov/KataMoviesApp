import React, {Component} from 'react';
import CardItems from "./CardItems";
import {connect} from "react-redux";
import {getActivePage, getDetailedMovies, getMovies} from "../../ReduxToolkit/Selectors/MovieSelector";
import {getMoviesThunk} from "../../ReduxToolkit/Slice/MovieSlice";

class CardItemsContainer extends Component {
    componentDidMount() {
        this.props.getMoviesThunk()
    }

    render() {
        if (!this.props.Movies) {
            return <div>
                no data
            </div>
        }
        return <CardItems {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        Movies: getMovies(state),
        ActivePage: getActivePage(state)
    }
}

export default connect(mapStateToProps, {getMoviesThunk})(CardItemsContainer);