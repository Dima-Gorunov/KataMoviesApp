import {connect} from "react-redux";
import PaginationComp from "./PaginationComp";
import {Component} from "react";
import {
    getActivePage,
    getInputText,
    getMovies, getMoviesLoad,
    getPages,
    getSelectedMenuItem
} from "../../store/Selectors/MovieSelector";
import {getMoviesThunk, getRatedMoviesThunk} from "../../store/Slice/MovieSlice";

class PaginationCompContainer extends Component {

    render() {
        return ((this.props.Movies.length > 0 && !this.props.MoviesLoad) && this.props.Pages > 1) &&
            <PaginationComp {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        Pages: getPages(state),
        ActivePage: getActivePage(state),
        MenuItem: getSelectedMenuItem(state),
        Movies: getMovies(state),
        InputText: getInputText(state),
        MoviesLoad: getMoviesLoad(state)
    }
}

export default connect(mapStateToProps, {getMoviesThunk, getRatedMoviesThunk})(PaginationCompContainer)