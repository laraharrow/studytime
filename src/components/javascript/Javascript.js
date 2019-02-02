import React, { Component } from 'react';
import ValuesVar from './ValuesVar';
import Objects from './Objects';
import Arrays from './Arrays';
import ES6 from './ES6';
import BigO from './BigO';
import PrototypeClasses from './PrototypeClasses';
import Promise from './Promise';
import Recursion from './Recursion';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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


class Javascript extends Component {
  state = {
    openValuesVar: true,
    openObjects: true,
    openArrays: true,
    openES6: true,
    openBigO: true,
    openPrototypeClasses: true,
    openPromise: true,
    openRecursion: true,
  };

  handleClose = () => {
    this.setState({
      openValuesVar: true,
      openObjects: true,
      openArrays: true,
      openES6: true,
      openBigO: true,
      openPrototypeClasses: true,
      openPromise: true,
      openRecursion: true,
    })
  }

  handleValuesVar = () => {
    this.setState({
      openValuesVar: false,
      openObjects: true,
      openArrays: true,
      openES6: true,
      openBigO: true,
      openPrototypeClasses: true,
      openPromise: true,
      openRecursion: true,
    })
  }

  handleObjects = () => {
    this.setState({
      openValuesVar: true,
      openObjects: false,
      openArrays: true,
      openES6: true,
      openBigO: true,
      openPrototypeClasses: true,
      openPromise: true,
      openRecursion: true,
    })
  }

  handleArrays = () => {
    this.setState({
      openValuesVar: true,
      openObjects: true,
      openArrays: false,
      openES6: true,
      openBigO: true,
      openPrototypeClasses: true,
      openPromise: true,
      openRecursion: true,
    })
  }

  handleES6 = () => {
    this.setState({
      openValuesVar: true,
      openObjects: true,
      openArrays: true,
      openES6: false,
      openBigO: true,
      openPrototypeClasses: true,
      openPromise: true,
      openRecursion: true,
    })
  }

  handleBigO = () => {
    this.setState({
      openValuesVar: true,
      openObjects: true,
      openArrays: true,
      openES6: true,
      openBigO: false,
      openPrototypeClasses: true,
      openPromise: true,
      openRecursion: true,
    })
  }

    handlePrototypeClasses = () => {
      this.setState({
        openValuesVar: true,
        openObjects: true,
        openArrays: true,
        openES6: true,
        openBigO: true,
        openPrototypeClasses: false,
        openPromise: true,
        openRecursion: true,
      })
    }

    handlePromise = () => {
      this.setState({
        openValuesVar: true,
        openObjects: true,
        openArrays: true,
        openES6: true,
        openBigO: true,
        openPrototypeClasses: true,
        openPromise: false,
        openRecursion: true,
      })
    }

    handleRecursion = () => {
      this.setState({
        openValuesVar: true,
        openObjects: true,
        openArrays: true,
        openES6: true,
        openBigO: true,
        openPrototypeClasses: true,
        openPromise: true,
        openRecursion: false,
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
          <h1>Learning JavaScript</h1>
          <div>
            <div className={classes.root}>
              <div className={classes.label}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleValuesVar}
                >
                  Values + Variables
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleArrays}
                >
                  Array
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleObjects}
                >
                  Objects
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleES6}
                >
                  ES6
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handlePrototypeClasses}
                >
                  Prototype + Classes
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handlePromise}
                >
                  Promise - Async | Await
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleRecursion}
                >
                  Recursion
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleBigO}
                >
                  Big O
                </Button>
              </div>
            </div>
            <br/>
            <div className={classes.info}>
              {!this.state.openValuesVar && <ValuesVar close={this.handleClose}/>}
              {!this.state.openArrays && <Arrays close={this.handleClose}/>}
              {!this.state.openObjects && <Objects close={this.handleClose}/>}
              {!this.state.openES6 && <ES6 close={this.handleClose}/>}
              {!this.state.openBigO && <BigO close={this.handleClose}/>}
              {!this.state.openPrototypeClasses && <PrototypeClasses close={this.handleClose}/>}
              {!this.state.openPromise && <Promise close={this.handleClose}/>}
              {!this.state.openRecursion && <Recursion close={this.handleClose}/>}
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
};

Javascript.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Javascript);
