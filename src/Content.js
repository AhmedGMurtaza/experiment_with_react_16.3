import React from 'react';
import Paper from 'material-ui/Paper';

import UserContainer from './Container/User';
import ProductContainer from './Container/Product';

import { Consumer } from './ContextContainer/Router';
import Route from './ContextContainer/Route';

export default function Content(props) {
    return <Paper style={{padding:20, margin: 20}}>
        <Consumer>
            {({state, action}) => {
                return <React.Fragment>
                    <Route path="/"><div>main</div></Route>
                    <Route path="/users"><UserContainer /></Route>
                    <Route path="/products"><ProductContainer /></Route>
                </React.Fragment>
            }}
        </Consumer>
    </Paper>;
}