import {connect} from "react-redux";
import PaginationComp from "./PaginationComp";
import {Component} from "react";
import {getActivePage, getPages} from "../../ReduxToolkit/Selectors/MovieSelector";
import {getMoviesThunk} from "../../ReduxToolkit/Slice/MovieSlice";

class PaginationCompContainer extends Component {

    render() {
        return <PaginationComp {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        Pages: getPages(state),
        ActivePage: getActivePage(state)
    }
}

export default connect(mapStateToProps, {getMoviesThunk})(PaginationCompContainer)