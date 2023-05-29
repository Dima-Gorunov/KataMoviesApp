import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getInputText, getMenuItems, getSelectedMenuItem } from '../../store/Selectors/MovieSelector';
import { getMoviesThunk, getRatedMoviesThunk, setSelectedMenuItemThunk } from '../../store/Slice/MovieSlice';

import MenuComp from './MenuComp';

class MenuCompContainer extends Component {
  render() {
    return <MenuComp {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    MenuItems: getMenuItems(state),
    SelectedMenuItem: getSelectedMenuItem(state),
    InputText: getInputText(state),
  };
};

export default connect(mapStateToProps, {
  setSelectedMenuItemThunk,
  getMoviesThunk,
  getRatedMoviesThunk,
})(MenuCompContainer);
