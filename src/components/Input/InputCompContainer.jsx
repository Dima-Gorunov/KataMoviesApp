import React, {Component} from 'react';
import {connect} from "react-redux";
import InputComp from "./InputComp";
import {getInputText, getSelectedMenuItem} from "../../ReduxToolkit/Selectors/MovieSelector";
import {getMoviesThunk, setInputText} from "../../ReduxToolkit/Slice/MovieSlice";

class InputCompContainer extends Component {
    render() {
        if (this.props.MenuItem !== `Rated`) {
            return <InputComp {...this.props} />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        InputText: getInputText(state),
        MenuItem: getSelectedMenuItem(state)
    }
}

export default connect(mapStateToProps, {getMoviesThunk, setInputText})(InputCompContainer);