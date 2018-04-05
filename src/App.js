import React from 'react';

import RouterContextContainer from './ContextContainer/Router';
import UserContextContainer from './ContextContainer/User';
import ProductContextContainer from './ContextContainer/Product';

import Toobar from './Toolbar';
import Content from './Content';

import './App.css';



class App extends React.Component {
  render() {
    return (
      <RouterContextContainer>
        <UserContextContainer>
          <ProductContextContainer>
            <Toobar />
            <Content />
          </ProductContextContainer>
        </UserContextContainer>
      </RouterContextContainer>
    );
  }
}

export default App;
