import React, { createContext } from 'react';


const initialState = {
    list: [
        {name: 'Product A', price: 1},
        {name: 'Product B', price: 12},
        {name: 'Product C', price: 123},
        {name: 'Product D', price: 1234},
        {name: 'Product E', price: 12345},
    ],
    page: 1
};

const Context = createContext()
const {Provider, Consumer} = Context;

class Product extends React.Component{
    state = initialState;
    action = {};
    render() {
        return <Provider value={createValue(this.state, this.action)}>{this.props.children}</Provider>;
    }
}

export { Product as default, Consumer };

function createValue(state = {}, action = {}) {
  return {state, action}
}