import React, { Component } from 'react';
import Intro from './Intro';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    justifyContent: 'center',
  },
  label: {
    display: 'inline-flex',
  },
  info: {
    display: 'inline-block',
  },
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


class LearnReact extends Component {
  state = {
    openIntro: true,

  };

  handleClose = () => {
    this.setState({
      openIntro: true,

    })
  }

  handleIntro = () => {
    this.setState({
      openIntro: false,

    })
  }


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
          <h1>Learning React</h1>
          <div>
            <div className={classes.root}>
              <div className={classes.label}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleIntro}
                >
                  Intro
                </Button>
              </div>
              <Typography className={classes.align} variant="body1" gutterBottom>
                This page will be updated with some new information soon.
              </Typography>
            </div>
            <br/>
            <div className={classes.info}>
              {!this.state.openIntro && <Intro close={this.handleClose}/>}

            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
};

LearnReact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LearnReact);
