import React from 'react';

import { Consumer } from './../ContextContainer/User';

export default class User extends React.Component{
    render() {
        return <Consumer>{({state})=><React.Fragment>
            <div>Name: {state.name}</div>
            <div>Rote: {state.role}</div>
            <div>Boat: {state.boat}</div>
            <div>"{state.quote}"</div>
        </React.Fragment>}</Consumer>;
    }
}
