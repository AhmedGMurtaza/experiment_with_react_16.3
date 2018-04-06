import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { Consumer } from './ContextContainer/Router';
import Link from './ContextContainer/Link';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function AppToolBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="title" color="inherit" className={classes.flex}>
            Multiples Providers in new React context api
          </Typography>
          <Link path="/" component={Button} color="inherit">Home</Link>
          <Link path="/users" component={Button} color="inherit">User</Link>
          <Consumer>
            {({action}) => <React.Fragment>
              <Button color="inherit" onClick={()=>action.go('/products')}>Products</Button>
            </React.Fragment>}
          </Consumer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppToolBar);