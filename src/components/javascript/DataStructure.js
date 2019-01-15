import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

const DataStructure = (props) => {
  const { classes, close, openBigO } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Button
          variant="fab"
          color="secondary"
          className={classes.button}
          onClick={close}
        >
          X
        </Button>
        <Typography className={classes.light} variant="h5" component="h3">
          DATA STRUCTURES
        </Typography>
          <br/>
          <Divider />
          <br/>
          <br/>
        <Typography  className={classes.align} variant="body1" gutterBottom>
          <span className={classes.code}>... In computer science, a data structure is a particular way of organizing data in a computer so that it can be used efficiently...</span> <a className={classes.dark} target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Data_structure"> Wikipedia</a>
          <br/>
          <br/>
          A good way to start is by separating the different data structures in groups. While <strong className={classes.light}>Stack </strong> and <strong className={classes.light}> Queue </strong> are array-like structure with just a different way to insert and remove data. <strong className={classes.light}>Linked-List </strong>, <strong className={classes.light}> Tree </strong> and <strong className={classes.light}> Graph </strong> are node based structures that are constructed with nodes having reference to other nodes. The last group would be where the
          <strong className={classes.light}> Hash Table </strong> belongs. It uses a hash function to store and locate data.
          <br/>
          <br/>
          There are a varaity of Data Structures and each individual one can better solve a different problem. That's why on the cuote from Wikipedia above they mention <span className={classes.code}> organazing data so that it can be used efficialntly</span>. Each different data structure has advantages and desadvantages and its important to know its specificity in order to decide which structure will better solve your problem.
          <br/>
          The complexity of each data structure is one of the reasons why an specific data structure can be more beneficial for a given situation. There are 2 import consepts that makes the complexity of a data structure.
          <br/>
          <br/>
          <strong className={classes.light}>SPACE COMPLEXITY </strong> deals with computing how much extra space is needed, as the input size changes.
          <br/>
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
        <strong className={classes.dark}> Stack and Queue </strong>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <strong className={classes.light}> Stack </strong> is an array-like strucutre that follows the "LIFO" protocol. Meaning Last In First Out and that is the rule of a stack the last element added to it will be the first one out. Like if we pile up plates on top pf each other and always take the one from the top out.
          <br/>
          A famous stack is the <strong className={classes.light}> Call Stack </strong> where JavaScript stores and menages all activities of any program.
          <br/>
          There are 2 main JavaScript methods that can be used to help constructing it:
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`.push()`}</strong>
          <span className={classes.code}>&nbsp;&nbsp;&nbsp;{`// to add elements to the stack`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`.pop()`}</strong>
          <span className={classes.code}>&nbsp;&nbsp;&nbsp;{`// to remove elements to the stack`}</span>
          <br/>
          <br/>
          <strong className={classes.light}> Queue </strong> is also an array-like structure but the protocol for adding and removing elements is "FIFO" First In First Out. We can think of a line to buy a ticket at the movie theater where the first person to get to the line will be the first one to get the ticket.
          <br/>
          The methods to contruct this structure are:
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`.unshift()`}</strong>
          <span className={classes.code}>&nbsp;&nbsp;&nbsp;{`// to remove elements to the stack`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`.pop()`}</strong>
          <span className={classes.code}>&nbsp;&nbsp;&nbsp;{`// to remove elements to the stack`}</span>
          <br/>
          <br/>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <strong className={classes.light}> Implementing Stack and Queue </strong>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <strong className={classes.code}>&nbsp;{`class Stack {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`constructor(...items)`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.stack = [...items]`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`add(...items) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.stack.push(...items);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`remove() {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.stack.pop();`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let myStack = new Stack(1, 2)`}</strong>
          <span className={classes.code}>&nbsp;&nbsp;{`//  myStack = [1, 2]`}</span>
          <br/>
          <strong className={classes.code}>&nbsp;{`myStack.add(3, 4, 5);`}</strong>
          <span className={classes.code}>&nbsp;&nbsp;{`//  myStack = [1, 2, 3, 4, 5]`}</span>
          <br/>
          <strong className={classes.code}>&nbsp;{`myStack.remove();`}</strong>
          <span className={classes.code}>&nbsp;&nbsp;{`//  myStack = [1, 2, 3, 4]`}</span>
          <br/>
          <br/>
        </Typography>



        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <strong className={classes.dark}> PROTOTYPE </strong>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <strong className={classes.light}> d </strong>
          <strong className={classes.code}>&nbsp;{`c`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`b`}</span>
          <br/>
          <br/>
        </Typography>
        <strong className={classes.dark}> a </strong>
      </Paper>
    </div>
  )
}

DataStructure.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataStructure);
