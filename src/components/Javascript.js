import React, { Component } from 'react';
import ES6 from './ES6';
import DataType from './DataType';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  main: {
    display: 'inline-flex',
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
    openES6: true,
    openDataType: true,
  };

  handleES6 = () => {
    this.setState({
      openES6: !this.state.openES6
    })
  }

  handleDataType = () => {
    this.setState({
      openDataType: !this.state.openDataType
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
            onClick={e => this.props.manageJS('JavaScript')}
          >
            close
          </Button>
          <h1>Learning JavaScript</h1>
          <div className={classes.main}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={this.handleES6}
            >
              {this.state.openES6 ? 'Open' : 'Close'} ES6
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={this.handleDataType}
            >
              {this.state.openDataType ? 'Open' : 'Close'} DataType
            </Button>
            <div>
              {!this.state.openES6 && <ES6 />}
              {!this.state.openDataType && <DataType />}
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
