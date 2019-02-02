import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    align: "left",
    display:'flex'
  },
  input: {
    display: 'none',
  },
});


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
      main: '#f0f5f5',
      contrastText: '#334d4d',
    },
  },
});

class Challanges extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Button
            variant="fab"
            color="secondary"
            className={classes.button}
            onClick={e => this.props.backHome()}
          >
            Home
          </Button>
          <h1>Challanges</h1>
          <Typography className={classes.align} variant="body1" gutterBottom>
            This page will be updated with some new information soon.
          </Typography>
        </MuiThemeProvider>
      </div>
    )
  }
};

Challanges.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Challanges);
