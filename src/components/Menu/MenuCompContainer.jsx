import React, {Component} from 'react';
import MenuComp from "./MenuComp";
import {connect} from "react-redux";
import {getInputText, getMenuItems, getSelectedMenuItem} from "../../ReduxToolkit/Selectors/MovieSelector";
import {getMoviesThunk, getRatedMoviesThunk, setSelectedMenuItemThunk} from "../../ReduxToolkit/Slice/MovieSlice";

class MenuCompContainer extends Component {
    render() {
        return (
            <MenuComp {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        MenuItems: getMenuItems(state),
        SelectedMenuItem: getSelectedMenuItem(state),
        InputText:getInputText(state)
    }
}

export default connect(mapStateToProps, {
    setSelectedMenuItemThunk,
    getMoviesThunk,
    getRatedMoviesThunk
})(MenuCompContainer);