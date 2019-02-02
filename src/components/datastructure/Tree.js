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

const Tree = (props) => {
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

        <strong className={classes.dark}> TREE </strong>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          This structure, like a linked list, is a sequence of nodes linked to one another, the similarites end right there. Trees have a hierarchical structure where each node has its own data value, a parent node, and a list of childrens nodes usually represented by an array of trees. One more important detail to be aware of is that each node can not have more then one parent but it can have muitiple children.
          <br/>
          One famous tree structure is the <strong className={classes.light}> Document Object Model - DOM </strong> with the <strong className={classes.code}> html </strong> tag as the root node and  <strong className={classes.code}> head </strong> and <strong className={classes.code}> body  </strong> as its children. With the same relation every tag inside body is part of its childrens list.
          <br/>
          <br/>
          <strong className={classes.dark}> Binary Search Tree </strong>
          <br/>
          <br/>
          We will implement a tree called <strong className={classes.code}>Binary Search Tree - BST</strong>. Everything that we talked about so far relating to trees also apply to a <strong className={classes.code}>BST</strong> tree, exept that every tree parent can only have two children. Both chidren will be placed based on its relationship to the parent tree value. If the new tree introduces a value greater then its parent value. Then that new tree will be placed on the right side of the parent. Now if the new tree has a value lower then the parent value that new tree will be places on the left side.
          <br/>
          <strong className={classes.code}>BST</strong> is a great data structure for look up since everytime we have to check for a value you can devide the tree in half. Look back on our Big O table above to see the specific time complexity for a <strong className={classes.code}>Binary Search Tree.</strong>
          <br/>
          There are two main ways to traverse through every node in a <strong className={classes.code}>BST</strong>. Traverse means look into every node in the tree. There are some subdivision that we can get into when we write the code. But for now we just want to get some understanding of how the two traversing methods works and how they defer form each other.
          <br/>
          <strong className={classes.code}>&nbsp;Breadth-First Traversal - BFT</strong>
          <br/>
          <strong className={classes.code}>&nbsp;Depth-First Traversal - DFT</strong>
          <br/>
          Each of those traverse methods are some what related to one of the first structures we looked at. <strong className={classes.code}>BFT</strong> follows the stack protocol while <strong className={classes.code}>DFT</strong> follows the queue protocol to check each node in the tree. Just keep that in mind when we are looking into the code.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`class Tree {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`constructor(data) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.data = data;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.left = null;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.right = null;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// here we are just creating the blue print of our tree, that would have a value data and the two children: To the left - smaler then the data. and to the right - greter then the data.`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`insert(data) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (data <= this.data) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.left ? this.left.insert(data): new Tree(data);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`} else {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.right ? this.right.insert(data) : new Tree(data);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`};`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`/* our insert method, will insert a new node at the correct position based on what is already in our tree.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`We are first checking if the new value is lower or greter then the data value at root position, that will determine if we go right or left.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{` After that we are checking if there is a child at that position if not we just make the new tree to be placed at that position, otherwise we recursively call insert having the tree at left or right as the root node. That recursion will happend until we find the position where our new tree can be placed.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`*/`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`conteins(data) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (data = this.data) return true;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (data < this.data) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.left ? return this.left.contains(data) : return false;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`} else {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.right ? return this.right.contains(data) : return false;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`};`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`/* Here we are using the same recursive logic as on our insert method.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{` The only difference is that instead of inserting a value we just return true or false based on finding a tree with the expected data.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{` After that we are checking if the parent at that time has a child tree if not we just make the new tree to be placed aas a child of the parent tree at that point, left or right based on the size of data compared with theparent data.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{` Otherwise we recursively call contains having the tree at left or right as the root node (this). That recursion will happend until we find the position where a tree with that data value exists or until we hit an empty child spot.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`*/`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`remove(data) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (data = this.data) return true;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (data < this.data) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.left ? return this.left.contains(data) : return false;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`} else {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.right ? return this.right.contains(data) : return false;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`};`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`/* Here we are using the same recursive logic as on our insert method.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{` The only difference is that instead of inserting a value we just return true or false based on finding a tree with the expected data.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{` After that we are checking if the parent at that time has a child tree if not we just make the new tree to be placed aas a child of the parent tree at that point, left or right based on the size of data compared with theparent data.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{` Otherwise we recursively call contains having the tree at left or right as the root node (this). That recursion will happend until we find the position where a tree with that data value exists or until we hit an empty child spot.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`*/`}</span>
          <br/>
          <br/>
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
          <Divider />
          <br/>
          <br/>
        </Typography>
      </Paper>
    </div>
  )
}

Tree.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tree);
