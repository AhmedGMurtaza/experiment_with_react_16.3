import React, { createContext } from 'react';
import history from 'browser-history';
import pathToRegexp from 'path-to-regexp';

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
        return <Provider value={createValue(this.state, this.action)}>{this.props.children}</Provider>;
    }
}


function createValue(state = {}, action = {}) {
  return {state, action}
}

function Route(props) {
    return (<Consumer>
        {({state})=> {
            const re = pathToRegexp(props.path);
            if (re.test(state.url)) return props.children;
        }}
    </Consumer>);
}

export { Router as default, Consumer, Route };