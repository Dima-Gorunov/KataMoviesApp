import React, {Component} from 'react';
import {Menu} from 'antd';
import {getRatedMoviesThunk} from "../../ReduxToolkit/Slice/MovieSlice";


class MenuComp extends Component {

    onClick(e) {
        const {key} = e
        this.props.setSelectedMenuItemThunk(key)
        if (key === "Rated") {
            this.props.getRatedMoviesThunk()
        }
        if (key === "Search") {
            this.props.getMoviesThunk(1, this.props.InputText)
        }
    }

    render() {
        return (
            <Menu onClick={(e) => this.onClick(e)} selectedKeys={this.props.SelectedMenuItem} mode="horizontal"
                  items={this.props.MenuItems}/>
        )
    }
}

export default MenuComp;