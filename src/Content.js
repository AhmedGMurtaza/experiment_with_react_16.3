import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import {Consumer as RouterConsumer} from './Contexts/Router';

export default function Content(props) {
    return <Paper style={{padding:20, margin: 20}}>
        <RouterConsumer>
            {({state, action}) => {
                if (state === '/') return <div>Main {state}</div>;
                if (state === '/users') return <div>Users</div>;
                if (state === '/products') return <div>Products</div>;
            }}
        </RouterConsumer>
    </Paper>;
}