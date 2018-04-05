import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';


import { Consumer } from './../ContextContainer/Product';

export default class Product extends React.Component{
    render() {
        return <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <Consumer>{({state}) => 
                    <React.Fragment>{state.products.map(product => {
                        return <TableRow>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell><Button variant="raised" color="primary">Buy</Button></TableCell>
                        </TableRow>;
                    })}</React.Fragment>
                }</Consumer>
            </TableBody>
        </Table>;
    }
}

