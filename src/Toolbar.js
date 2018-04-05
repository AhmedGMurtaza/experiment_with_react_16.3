import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import { Consumer as RouterConsumer } from './ContextContainer/Router';

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

          <RouterConsumer>
            {({action}) => <React.Fragment>
              <Button color="inherit" onClick={()=>action.go('/users')}>Users</Button>
              <Button color="inherit" onClick={()=>action.go('/products')}>Products</Button>
            </React.Fragment>}
          </RouterConsumer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppToolBar);