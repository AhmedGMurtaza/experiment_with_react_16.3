import React, { createContext } from 'react';

const initialState = {
    name: 'Johnny Wray',
    role: 'Captian',
    boat: 'Ngataki',
    quote: 'Conglomerations of facts occasioned by heterogeneous concatenations of stupid irrelevancies'
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
