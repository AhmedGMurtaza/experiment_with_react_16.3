
import React, { Component } from 'react';

import * as UserContext from './../Contexts/User';

export default class User extends Component{
    state = UserContext.initialState;
    action = UserContext.action(this);

    render() {
        return <UserContext.Provider value={createValue(this.state, this.action)}>{this.props.children}</UserContext.Provider>;
    }
}

function createValue(state = {}, action = {}) {
  return {state, action}
}