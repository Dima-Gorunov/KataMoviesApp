import React, {Component} from 'react';
import {connect} from "react-redux";
import InputComp from "./InputComp";
import {getInputText, getSelectedMenuItem} from "../../store/Selectors/MovieSelector";
import {getMoviesThunk, setInputText} from "../../store/Slice/MovieSlice";

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