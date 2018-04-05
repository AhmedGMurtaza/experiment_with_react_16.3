
import React, { createContext } from 'react';

const initialState = {
    name: 'Johnny Wray',
    role: 'Captian',
    boat: 'Ngataki',
    quote: 'Conglomerations of facts occasioned by heterogeneous concatenations of stupid irrelevancies'
};

const Context = createContext()
const {Provider, Consumer} = Context;

class User extends React.Component{
    state = initialState;
    action = {};

    render() {
        return <Provider value={createValue(this.state, this.action)}>{this.props.children}</Provider>;
    }
}

function createValue(state = {}, action = {}) {
  return {state, action}
}

export { User as default, Consumer };