import React from 'react';

import * as Router from './Contexts/Router';

import UserContextContainer from './ContextContainer/User';
import ProductContextContainer from './ContextContainer/Product';

import Toobar from './Toolbar';
import Content from './Content';

import './App.css';




class App extends React.Component {
  state = {
    router: Router.initialState
  };

  action = {
    router: Router.action(this)
  };

  render() {
    return (
      <Router.Provider value={createValue(this.state.router, this.action.router)}>
        <UserContextContainer>
          <ProductContextContainer>
            <Toobar />
            <Content />
          </ProductContextContainer>
        </UserContextContainer>
      </Router.Provider>
    );
  }
}

function createValue(state = {}, action = {}) {
  return {state, action}
}

export default App;
