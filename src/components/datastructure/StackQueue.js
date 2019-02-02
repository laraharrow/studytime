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

const StackQueue = (props) => {
  const { classes, close } = props;

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
          <br/>
          <br/>
          <strong className={classes.dark}> STACK and QUEUE </strong>
          <br/>
          <br/>
          <Typography className={classes.align} variant="body1" gutterBottom>
            <strong className={classes.light}> Stack </strong> is an array-like strucutre that follows the "LIFO" protocol - Last In First Out - the last element added to the stack will be the first one out. Like if we pile up plates on top of each other and always take the one from the top out first.
            <br/>
            A famous stack is the <strong className={classes.light}> Call Stack </strong> where JavaScript stores and menages all activities of any program.
            <br/>
            JavaScript methods that can help construct a Stack:
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
            <strong className={classes.light}> Queue </strong> is also an array-like structure but the protocol for adding and removing elements is "FIFO" - First In First Out - the first element in will be the first element out. We can think of a line to buy a ticket at the movie theater where the first person to get to the line will be the first one to get the ticket.
            <br/>
            JavaScript methods that can help contruct a Queue:
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
          <strong className={classes.light}> Implementing Stack:</strong>
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
          </Typography>
          <br/>
          <br/>
          <Divider />
          <br/>
          <br/>
          <strong className={classes.light}> Implementing Queue:</strong>
          <br/>
          <br/>
          <Typography className={classes.align} variant="body1" gutterBottom>
            <strong className={classes.code}>&nbsp;{`class Queue {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`constructor(...items)`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.queue = [...items]`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`enqueue(...items) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.queue.unshift(...items);`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`dequeue() {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.queue.pop();`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;{`let myQueue = new Queue('a', 'b')`}</strong>
            <span className={classes.code}>&nbsp;&nbsp;{`//  myQueue = ['a', 'b']`}</span>
            <br/>
            <strong className={classes.code}>&nbsp;{`myQueue.enqueue('c', 'd', 'e');`}</strong>
            <span className={classes.code}>&nbsp;&nbsp;{`//  myQueue = ['a', 'b', 'c', 'd', 'e']`}</span>
            <br/>
            <strong className={classes.code}>&nbsp;{`myQueue.dequeue();`}</strong>
            <span className={classes.code}>&nbsp;&nbsp;{`//  myStack = ['b', 'c', 'd', 'e']`}</span>
            <br/>
            <br/>
          </Typography>
          <Button
            variant="fab"
            color="secondary"
            className={classes.button}
            onClick={close}
            >
              X
            </Button>
        </Paper>
      </div>
    )
  }

  StackQueue.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(StackQueue);
