import React, { createContext } from 'react';
import history from 'browser-history';

const initialState = {
    url: window.location.pathname
};

const Context = createContext()
const {Provider, Consumer} = Context;

class Router extends React.Component{
    state = initialState;

    action = {
        go: (url) => this.setState(
                state => ({...state, url}),
                () => history(url)
            )
    };

    componentDidMount() {
        history((e, url) => this.setState(state=>({...state, url})));
    }

    render() {
        return <Provider value={{state: this.state, action:this.action}}>{this.props.children}</Provider>;
    }
}

export { Router as default, Consumer };