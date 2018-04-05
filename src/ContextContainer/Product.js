import React, { createContext } from 'react';


const initialState = {
    products: [
        {id: 1, name: 'Product A', price: 1},
        {id: 12, name: 'Product B', price: 12},
        {id: 123, name: 'Product C', price: 123},
        {id: 1234, name: 'Product D', price: 1234},
        {id: 12345, name: 'Product E', price: 12345},
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