import React, {Component} from 'react';
import Card from "./Card";
import {connect} from "react-redux";
import {getDetailsData} from "../../ReduxToolkit/Slice/MovieSlice";
import {getActivePage, getMovies, getMoviesLoad} from "../../ReduxToolkit/Selectors/MovieSelector";
import CardLoader from "./CardLoader";

class CardContainer extends Component {
    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        if (this.props.MoviesLoad){
            return (<CardLoader/>)
        }
        return <Card {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        ActivePage: getActivePage(state),
        MoviesLoad:getMoviesLoad(state)
    }
}

export default connect(mapStateToProps, {getDetailsData})(CardContainer);