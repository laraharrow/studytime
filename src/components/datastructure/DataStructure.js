import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StackQueue from './StackQueue';
import LinkedList from './LinkedList';
import Tree from './Tree';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
    align: 'center',
    display:'inline-block',
    width: '75%',
    marginBottom: '25px',
    justifyContent: 'center',
  },
  label: {
    display: 'inline-flex',
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: "#00352c",
    fontSize: 'small',
  },
  back1: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: "#00352c",
    fontSize: 'xx-small',
    backgroundColor: "#c5e1a5"
  },
  back2: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: "#00352c",
    fontSize: 'xx-small',
    backgroundColor: "#8bc34a"
  },
  align: {
    textAlign: 'left',
  },
  button: {
    margin: theme.spacing.unit,
    align: "left",
    display:'flex'
  },
  light: {
    color: "#7c9c99",
  },
  dark: {
    color: "#00352c",
  },
  code: {
    color: "#5b874b",
    textAlign: 'left',
    fontFamily: "Courier New",
    fontSize: 16,
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

class DataStructure extends Component {
  state = {
    openStackQueue: true,
    openLinkedList: true,
    openTree: true,
  };

  handleClose = () => {
    this.setState({
      openStackQueue: true,
      openLinkedList: true,
      openTree: true,
    })
  }

  handleStackQueue = () => {
    this.setState({
      openStackQueue: false,
      openLinkedList: true,
      openTree: true,
    })
  }

  handleLinkedList = () => {
    this.setState({
      openStackQueue: true,
      openLinkedList: false,
      openTree: true,
    })
  }

  handleTree = () => {
    this.setState({
      openStackQueue: true,
      openLinkedList: true,
      openTree: false,
    })
  }


  render() {
    const { classes, close, openBigO } = this.props;
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
          <h1>Learning DataStructure</h1>
          <div>
            <div className={classes.root}>
              <div className={classes.label}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleStackQueue}
                >
                  Stack Queue
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleLinkedList}
                >
                  Linked List
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleTree}
                >
                  Tree
                </Button>
              </div>
              <div className={classes.info}>
                {!this.state.openLinkedList && <LinkedList close={this.handleClose}/>}
                {!this.state.openStackQueue && <StackQueue close={this.handleClose}/>}
                {!this.state.openTree && <Tree close={this.handleClose}/>}
              </div>
              <div>
                <br/>
                <br/>
                <Typography  className={classes.align} variant="body1" gutterBottom>
                  <span className={classes.code}>... In computer sciense, a data structure is a particular way of organizing data in a computer so that it can be used efficiently...</span> <a className={classes.dark} target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Data_structure"> Wikipedia</a>
                  <br/>
                  <br/>
                  A good way to start is by separating the different data structures in groups. While <strong className={classes.light}>Stack </strong> and <strong className={classes.light}> Queue </strong> are array-like structure with just a different way to insert and remove data. <strong className={classes.light}>Linked-List </strong>, <strong className={classes.light}> Tree </strong> and <strong className={classes.light}> Graph </strong> are node based structures that are constructed with nodes having reference to other nodes. The last group would be where the
                  <strong className={classes.light}> Hash Table </strong> belongs. It uses a hash function to store and locate data.
                  <br/>
                  There are a varaity of Data Structures and each individual one can better solve a different problem. That's why on the cuote from Wikipedia above they mention <span className={classes.code}> organazing data so that it can be used efficialntly</span>. Each different data structure has advantages and desadvantages and its important to know its specificity in order to decide which structure will better solve your problem.
                  <br/>
                  The complexity of each data structure is one of the reasons why an specific data structure can be more beneficial for a given situation. There are 2 import consepts that makes the complexity of a data structure.
                  <br/>
                  <br/>
                  <strong className={classes.light}>SPACE COMPLEXITY </strong> deals with computing how much extra space is needed, as the input size changes.
                  <br/>
                  <strong className={classes.light}>TIME COMPLEXITY </strong> deals with computing how much time is used, based on changes on input size.
                  <br/>
                  <br/>
                </Typography>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}>Data Structure</Paper>
                    </Grid>
                    <Grid item xs={8}>
                      <Paper className={classes.paper}>time complexity</Paper>
                    </Grid>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}>space complexity</Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={24}>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}> --- </Paper>
                    </Grid>
                    <Grid item xs={4}>
                      <Paper className={classes.paper}>avarege</Paper>
                    </Grid>
                    <Grid item xs={4}>
                      <Paper className={classes.paper}>worse</Paper>
                    </Grid>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}>worse</Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={24}>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}> --- </Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>access</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>search</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>insert</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>delete</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>access</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>search</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>insert</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>delete</Paper>
                    </Grid>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}> --- </Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={24}>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}> stack </Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={2}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={24}>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}> linked-list </Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={2}>
                      <Paper className={classes.back1}>O(n)</Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={24}>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}> tree </Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}> -- </Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}> -- </Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}> -- </Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}> -- </Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}> -- </Paper>
                    </Grid>
                    <Grid item xs={2}>
                      <Paper className={classes.back1}> -- </Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={24}>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}> BST </Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(log(n))</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(log(n))</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(log(n))</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={2}>
                      <Paper className={classes.back1}>O(n)</Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={24}>
                    <Grid item xs={2}>
                      <Paper className={classes.paper}> hash table </Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>---</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back1}>O(1)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.paper}>---</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={1}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                    <Grid item xs={2}>
                      <Paper className={classes.back2}>O(n)</Paper>
                    </Grid>
                  </Grid>
                </div>
                <br/>
                <br/>
                For more information about time and space complexity go to: <Button color="primary" onClick={openBigO}> Big O </Button>
                <br/>
                <br/>
                <Divider />
                <br/>
                <br/>
                <Typography className={classes.align} variant="body1" gutterBottom>
                  Based on complexity, since <strong className={classes.light}> Stack </strong> and <strong className={classes.light}> Queue </strong> can be constructed using a <strong className={classes.light}> Linked-List </strong>, they are the simplest. On the other hand <strong className={classes.light}> Graph </strong> and <strong className={classes.light}> Tree </strong> both extend the concept of a
                  <strong className={classes.light}> Linked-List </strong> and there for are some of the more complex data structure.
                  <br/>
                  As for performance <strong className={classes.light}> Linked-List </strong> are optimal for storing data. While <strong className={classes.light}> Hash Table </strong> have the best performace for search and retrieve data.
                </Typography>
                <br/>
                <br/>
                <Divider />
                <br/>
                <br/>
              </div>
            </div>
            <br/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
};

DataStructure.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataStructure);
