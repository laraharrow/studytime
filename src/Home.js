import React, { Component } from 'react';
import Welcome from './components/Welcome';
import JavaScript from './components/Javascript';
import Challanges from './components/Challanges';
import LearnReact from './components/LearnReact';

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
    title: 'choose topic',
    welcome: false,
    JavaScript: true,
    LearnReact: true,
    Challanges: true,
  };


  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClick = (value) => {
    this.setState({
      anchorEl: null,
      welcome: !this.state.welcome,
      [value]: !this.state[value]
    });
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
                  onClick={e => this.handleMenuClick('JavaScript')}
                >
                  JavaScript
                </MenuItem>
                <MenuItem
                  onClick={e => this.handleMenuClick('LearnReact')}
                >
                  React
                </MenuItem>
                <MenuItem
                  onClick={e => this.handleMenuClick('Challanges')}
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
          {!this.state.JavaScript && <JavaScript manageJS={this.handleMenuClick} />}
          {!this.state.LearnReact && <LearnReact manageJS={this.handleMenuClick} />}
          {!this.state.Challanges && <Challanges manageJS={this.handleMenuClick} />}

        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
