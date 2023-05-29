import React from 'react';

import './style/App.scss';
import InputCompContainer from './components/Input/InputCompContainer';
import PaginationCompContainer from './components/Pagination/PaginationCompContainer';
import CardItemsContainer from './components/CardItems/CardItemsContainer';
import MenuCompContainer from './components/Menu/MenuCompContainer';

const App = (props) => {
  return (
    <div className="background">
      <div className="body-container">
        <MenuCompContainer />
        <InputCompContainer />
        <CardItemsContainer />
        <PaginationCompContainer />
      </div>
    </div>
  );
};

export default App;
