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
function action(container) {
    return {
    }
}

const Context = createContext()
const {Provider, Consumer} = Context;
export {
    Provider,
    Consumer,
    initialState,
    action
};