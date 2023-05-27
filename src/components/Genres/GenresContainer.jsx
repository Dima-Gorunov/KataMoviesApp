import React, {Component} from 'react';
import {connect} from "react-redux";
import Genres from "./Genres";

class GenresContainer extends Component {

    componentDidMount() {

    }

    render() {
        return <Genres {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(GenresContainer);