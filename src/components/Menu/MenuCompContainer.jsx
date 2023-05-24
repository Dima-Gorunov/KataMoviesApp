import React, {Component} from 'react';
import MenuComp from "./MenuComp";
import {connect} from "react-redux";
import {getMenuItems, getSelectedMenuItem} from "../../ReduxToolkit/Selectors/MovieSelector";
import {getRatedMoviesThunk, setSelectedMenuItemThunk} from "../../ReduxToolkit/Slice/MovieSlice";

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
        SelectedMenuItem: getSelectedMenuItem(state)
    }
}

export default connect(mapStateToProps, {setSelectedMenuItemThunk, getRatedMoviesThunk})(MenuCompContainer);