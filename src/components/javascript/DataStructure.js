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
            DATA STRuCTURES
          </Typography>
          <br/>
          <Divider />
          <br/>
          <br/>
          <Typography  className={classes.align} variant="body1" gutterBottom>
            <span className={classes.code}>... In computer sciense, a data structure is a particular way of organizing data in a computer so that it can be used efficiently...</span> <a className={classes.dark} target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Data_structure"> Wikipedia</a>
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
          <strong className={classes.dark}> STACK and QUEUE </strong>
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
          <strong className={classes.light}> Implementing Stack </strong>
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
          <strong className={classes.light}> Implementing Queue </strong>
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
          <br/>
          <br/>
          <Divider />
          <br/>
          <br/>
          <strong className={classes.dark}> LInKED LcST </strong>
          <br/>
          <br/>
          <Typography className={classes.align} variant="body1" gutterBottom>
             Similar to arrays this list store data elements in a sequential order. Each data element can be represented as a node, and this node consists of two parts: <strong className={classes.code}> data </strong> and  a <strong className={classes.light}> pointer </strong> to the next node. As a complete list <strong className={classes.light}> Linked List </strong> also store the node at first and last position respectively named: <strong className={classes.light}> head </strong> and <strong className={classes.light}> tail </strong>.
            <br/>
            Because each node has a pointer to the next node <strong className={classes.light}> Linked List </strong> have <strong className={classes.light}> constant </strong> time complexity to inseart and delete elements at any point in the list. But following the same logic the time complexity to search a node in a list is <strong className={classes.light}> linear </strong>.
            <br/>
            There are two different kids of <strong className={classes.light}> Linked List </strong>:
            <br/>
            <strong className={classes.light}> Singly-Linked List </strong>: Where each node has a reference only to the next node in the list.
            <br/>
            <strong className={classes.light}> Doubly-Linked List </strong>: Where each node has references to the previous and next node.
            <br/>
            <br/>
          </Typography>
          <strong className={classes.light}> Linked List class and some helpful methods: </strong>
          <Typography className={classes.align} variant="body1" gutterBottom>
            <br/>
            <br/>
            <strong className={classes.light}> Singly-Linked List </strong>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;{`class Node {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`constructor(data, next = null) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.data = data;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.next = next;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;{`};`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`// here we are creating a class that will create each node inside our list. Data will store the value of the node and next will store a different node to form our list`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;{`class SinglyLinkedList {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`constructor() {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.size = 0;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`// now we just created the blue print for our singly list where we will keep track of the first node stored in the list and the last node as well. To make this into a list each node created will have a pointer to the next node as we difined on the Node class.`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`addToHead(data) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`const newNode = New Node(data, this.head);`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = newNode;`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (!this.tail) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = newNode;`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.size++;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`/* when we create newNode we are setting data equal to the value passed as argument and setting its next pointer to the node that was at position head.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`At that point the old value of head is stored as pointer next and we can set newNode as the head.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`in case our list is empty tail's value should be null and we should change it to newNode value. We don't have to worrie about head since we set that up before.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{` we are also keeping track of how many nodes out list have. Every time we add a node to our list we add one to our size.  */`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`addToTail(data) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`const newNode = New Node(data);`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (this.tail) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail.next = newNode; `}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = newNode; `}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`} else {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = newNode;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = newNode;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.size++;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`/* Same as above we are creating a newNode with the values passed as arguments.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`Then we are setting the next pointer of tail to our newNode and finally resetting the value of tail to our newNode. The order here is important so we don't lose the node that was tail before the function got called.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`If our list is empty we add the newNode as our head and tail.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`To finalize again we are keeping track of the size of the list so we add one to our size.*/`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`AddAfterNode(data, node) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`const newNode = New Node(data);`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`let currentNode = this.head;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`while (currentNode.data !== node.data && currentNode.next) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`currentNode = currentNode.next;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`};`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (currentNode.data === node.data) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'newNode.next = currentNode.next;'}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'currentNode.next = newNode;'}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.size++;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`} else {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'return ERROR(`No node with value ${node.data}`);'}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{``}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`/* Again we are creating or newNode with the value passed as first argument.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`Then we are storing the head node as currentNode so we can iterate through our list checking for a node with data equal to do value passed as second argument.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`If we find a node data in our list with same data value, we set that node's next pointer to NewNode and our newNode's next pointer becomes the node that was the next pointer for the currentNode. Again we add one to size after we add a new node to our list.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`in case our list doesn't have a node with the passed value as data or if our list is empty we return an error.*/`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`removeHead() {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (this.head) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (this.size === 1) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = this.head.next;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.size--;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`/* Now we are removing the head by setting head equal to the head next pointer.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`Before that we are cheking if head exists and if it does if the list has only one node we can make the list empty by setting heand and tail equal to null.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`If head exists and the list has more then 1 node. We set head equal to the next node and that removes the old head.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`We then subtract one form size to keep it updated.*/`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`removeTail() {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (!this.head) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (!this.head.next) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.size--;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`let prev = this.head;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`let tail = this.head.next;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`while (tail.next) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`prev = tail;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`tail = tail.next;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = prev;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.size--;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`/* To remove the tail of our list we have to first make sure our list has a tail.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`On the first 2 if statements we are checking first if the our list is empty. In that case we don't do anything since there is no tail.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`The second if statement its checking for a list size 1 where the only node is the head and tail. In that case we empty our list and subtract 1 from our size before we finish the function.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`Then we get into a loop to find our tail node and we keep track of the previous node since that will be our new tail. Once we find the node that has null as its next value we set the previous node that we have been storing as our tail.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`Since we are keeping track of our list size we subtract one from our size.*/`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`removeNode(data) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`let currentNode = this.head;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`let previousNode = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`while (currentNode && currentNode.data !== data && currentNode.next) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`previousNode = currentNode;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`currentNode = currentNode.next;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (currentNode.data === data) { `}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (this.size === 1)`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`previousNode.next = currentNode.next;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`};`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`};`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`/* Now we are trying to remove an specific element with same data as the passed argument.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`We are creating variables to store the nodes that will have to be used to remove the node.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`next we interate through the list as long as we don't find a node with the data we want we keep itarating and reassigning the values of our variables.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`after the loop is over (loop will stop if we find the value we are looking for at the end of the list) we check if the data value at that node is equal to the one passed as argument.`}</span>
            <br/>
            <span className={classes.code}>&nbsp;{`There are two possibilities at this poit. If our list only have that element we have to empty the list by setting head and tail equal to null. If we have more elements we have to set the node that had its next poiter to the node we want to remove equal to the next pointer of the node we are removing. That will remove the reference to the node of value passed as argument.*/`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`listSize() {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return this.size;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`};`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`// Since we have been keeping track of our size as we add or remove nodes this function becomes trevial by only returning the size.`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`deleteList() {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`};`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`// Again simple method that remove all values by setting head and tail equla to null. This was added here to make the point that in JavaScrept if we don't have a variable or a data structure pointing or associated to an element that element is garbage collected and its not accecible anymore.`}</span>
            <br/>
            <br/>
            <br/>
            <br/>
            <strong className={classes.light}> Doubly-Linked List </strong>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;{`class Node {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`constructor(data, prev = null, next = null) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.data = data;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.next = next;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.prev = prev;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;{`};`}</strong>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;{`class DoublyLinkedList {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`constructor() {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`// We created a blue print for our Doubly list. Allthough very similar to a singly list there are a few differences. Here we added a new property to our constructor object, prev will store the value of the previous node given us a little more capability for functionalities.`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`addToHead(data) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`const newNode = New Node(data, null, this.head);`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = newNode;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (!this.tail) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = newNode;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`// Again very similar to our singly list. but our node class exept three arguments to fulfil its properties. We are creating our node and setting the next pointer equal to the existent head node - which could be a node or null if our list is empty. Then we set newNode as the fisrt node of our list - this.head. after finishing the function we are checking if this.tail exists and if it doesn't - meaning out list is empty - we are setting it to the same newNode value.`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`addToTail(data) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`const newNode = New Node(data, this.tail, null);`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (this.tail) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = newNode;`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`} else {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = newNode;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = newNode;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`// Again very similar. If the list has a tail we are setting that node as the prev of the node we just created and adding the new node as the lists tail and if the list is empty we are setting head and tail equal to the new node.`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`RemoveHead() {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (!this.head) { return; }`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head = this.head.next;`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head.prev = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`// Here we start by checking if the list doesn't have a head. If that is the case we can end the function. Otherwise we are settimg the head equal to the next node and setting the the prev pointer of our head to null.`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`RemoveTail() {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (!this.tail) { return; }`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.tail = this.tail.prev;`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.head.next = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`// Here we are doing the same as on the RemoveHead expt here we are taking our tail in comsideration. So when we set our new tail we know that the next value should be null and the tail's value should be the node before the existing tail in the list.`}</span>
            <br/>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`Search(data) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`let currentNode = this.head;`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`while (currentNode) {`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (currentNode.value === data) {`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return currentNode;`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`currentNode = currentNode.next;`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'return `${data} does not exist in the list`;'}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <br/>
            <span className={classes.code}>&nbsp;{`// To make sure a value is part of a list we need to chack every node in the list. We start with the head since that is the first node in the list, and we create a loop to compare every node's value to the value passed as argument. if we find that value we are returning that node, otherwise we are returning a message to inform that the node doesn't exists in the list.`}</span>
            <br/>
            <br/>
          </Typography>
          <br/>
          <br/>
          <Divider />
          <br/>
          <br/>
          <strong className={classes.dark}> TREE </strong>
          <br/>
          <br/>
          <Typography className={classes.align} variant="body1" gutterBottom>
            This structure like linked list is a sequence of nodes linked one to another. But the similarites end right there. Trees have a hierarchical structure where each node has its own data value a parent and childrens list. Each node can not have more then one parent but it can have muitiple childrens. That is why we refer to it as a childrens list.
            <br/>
            One famous tree structure is the <strong className={classes.light}> Document Object Model - DOM </strong> with the <strong className={classes.code}> html </strong> as the root node and <strong className={classes.code}> head </strong> and <strong className={classes.code}> body </strong> as children and every html tags as childrens of the body.
            <br/>
            There are two main ways to traverse through every node in the tree, that is, look into every node in the tree. There are some subdivision that we can get into when we write the code. An interesting note is that each of those traverse are referent to the first structure we looked at <strong className={classes.code}>&nbsp;{Breadth-First Traversal BFS}</strong> uses a stack and <strong className={classes.code}>&nbsp;{depth-First Traversal DFS}</strong> uses a queue to check each node in the tree.
            <br/>
            There is a very useful Tree that we will implement here called <strong className={classes.code}>{Binary Search Tree}</strong> and everything that a tree has its applyed to a <strong className={classes.code}>{BST}</strong>. But in this case every node only has 2
            <br/>
            <strong className={classes.code}>&nbsp;{`class Node {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`constructor(data) {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.data = data;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.parent = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.children = [];`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;{`class Tree {`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`root`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.data = data;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.parent = null;`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.children = [];`}</strong>
            <br/>
            <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>


            <span className={classes.code}>&nbsp;{`b`}</span>

            <strong className={classes.light}> d </strong>
            <strong className={classes.code}>&nbsp;{`c`}</strong>
            <span className={classes.code}>&nbsp;{`b`}</span>
            <br/>
            <br/>
          </Typography>



          <br/>
          <br/>
          <Divider />
          <br/>
          <br/>
          <strong className={classes.dark}> NEXT </strong>
          <br/>
          <br/>
          <Typography className={classes.align} variant="body1" gutterBottom>
            <strong className={classes.light}> d </strong>
            <strong className={classes.code}>&nbsp;{`c`}</strong>
            <span className={classes.code}>&nbsp;{`b`}</span>
            <br/>
            <br/>
          </Typography>
        </Paper>
      </div>
    )
  }

  DataStructure.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(DataStructure);
