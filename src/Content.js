import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import {Consumer as RouterConsumer, Route} from './ContextContainer/Router';

export default function Content(props) {
    return <Paper style={{padding:20, margin: 20}}>
        <RouterConsumer>
            {({state, action}) => {
                return <React.Fragment>
                    <Route path="/"><div>main</div></Route>
                    <Route path="/users"><div>users</div></Route>
                    <Route path="/products"><div>products</div></Route>
                </React.Fragment>
            }}
        </RouterConsumer>
    </Paper>;
}