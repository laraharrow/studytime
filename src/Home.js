import React, { Component } from 'react';
import Welcome from './components/Welcome';
import JavaScript from './components/javascript/Javascript';
import Challanges from './components/algorithms/Challanges';
import DataStructure from './components/datastructure/DataStructure';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
    menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#334d4d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#c2d6d6',
    },
  },
});

class Home extends Component {

  state = {
    anchorEl: null,
    welcome: false,
    JavaScript: true,
    DataStructure: true,
    Challanges: true,
  };


  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseButton = () => {
    this.setState({
      anchorEl: null,
      welcome: false,
      JavaScript: true,
      DataStructure: true,
      Challanges: true,
    });
  }

  handleMenuClick = (value) => {
    if (value === 'JavaScript') {
      this.setState({
        anchorEl: null,
        welcome: true,
        JavaScript: false,
        DataStructure: true,
        Challanges: true,
      });
    }
    if (value === 'DataStructure') {
      this.setState({
        anchorEl: null,
        welcome: true,
        JavaScript: true,
        DataStructure: false,
        Challanges: true,
      });
    }
    if (value === 'Challanges') {
      this.setState({
        anchorEl: null,
        welcome: true,
        JavaScript: true,
        DataStructure: true,
        Challanges: false,
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, title } = this.state;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" color="primary">
            <Toolbar variant="dense">
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                aria-owns={anchorEl ? 'menu' : undefined}
                area-haspopup="true"
                onClick={this.handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
              >
                <MenuItem
                  onClick={e => this.handleMenuClick("JavaScript")}
                >
                  JS Consepts
                </MenuItem>
                <MenuItem
                  onClick={e => this.handleMenuClick("DataStructure")}
                >
                  Data Structures
                </MenuItem>
                <MenuItem
                  onClick={e => this.handleMenuClick("Challanges")}
                >
                  Challanges
                </MenuItem>
              </Menu>
              <Typography variant="h6" color="inherit">
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
        <div>
          {!this.state.welcome && <Welcome move={this.handleMenuClick}/>}
        </div>
        <div>
          {!this.state.JavaScript && <JavaScript manageJS={this.handleCloseButton} />}
          {!this.state.DataStructure && <DataStructure manageJS={this.handleCloseButton} />}
          {!this.state.Challanges && <Challanges manageJS={this.handleCloseButton} />}

        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
