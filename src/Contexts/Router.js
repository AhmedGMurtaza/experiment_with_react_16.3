import React, { createContext } from 'react';

const initialState = window.location.pathname;

const Context = createContext()
const {Provider, Consumer} = Context;

function action(container) {
    return {
        go(newRoute) {
            container.setState({router: newRoute});
        }
    }
}

export {
    Provider,
    Consumer,
    initialState,
    action
};
