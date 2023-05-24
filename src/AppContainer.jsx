import React, {Component} from 'react';
import {connect} from "react-redux";
import App from "./App";
import {} from "./ReduxToolkit/Slice/MovieSlice";
import {createGuestSessionThunk, testThunk} from "./ReduxToolkit/Slice/AuthSlice";
class AppContainer extends Component {
    componentDidMount() {
        this.props.createGuestSessionThunk()
    }

    render() {
        return <App {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {createGuestSessionThunk, testThunk})(AppContainer);