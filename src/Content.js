import React from 'react';
import Paper from 'material-ui/Paper';

import {Consumer as RouterConsumer, Route} from './ContextContainer/Router';

import UserContainer from './Container/User';
import ProductContainer from './Container/Product';

export default function Content(props) {
    return <Paper style={{padding:20, margin: 20}}>
        <RouterConsumer>
            {({state, action}) => {
                return <React.Fragment>
                    <Route path="/"><div>main</div></Route>
                    <Route path="/users"><UserContainer /></Route>
                    <Route path="/products"><ProductContainer /></Route>
                </React.Fragment>
            }}
        </RouterConsumer>
    </Paper>;
}