import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '800px',
    marginBottom: '25px',
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
});

const ES6 = (props) => {
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
        <Typography className={classes.light} variant="h5" component="h3">
          ES6
          <br/>
          <br/>
        </Typography>
        <Typography  variant="body1" gutterBottom>
          ECMAScript 6 is also known as ES6 and ECMAScript 2015.
          <br/>
          <br/>
        </Typography>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>LET</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          The let statement allows we to declare a variable with block scope. Avoiding hoisting to the block scope, very helpful for for loops and iterations.
          <br/>
          <br/>
          <strong className={classes.dark}>
            {`let a = 50;`}
          </strong>
          <br/>
          <br/>
          <strong className={classes.dark}>
            {`if (true) {`}
          </strong>
          <br/>
          <strong className={classes.dark}>
            &nbsp;&nbsp;{`let a = 60;`}
          </strong>
          <br/>
          <strong className={classes.dark}>
            &nbsp;&nbsp;{`console.log( a );`}
          </strong>
          <br/>
          <strong className={classes.dark}>
            {`}`}
          </strong>
          &nbsp;&nbsp;//&nbsp;&nbsp;60
          <br/>
          <br/>
          <strong className={classes.dark}>
            {`console.log(a);`}
          </strong>
          &nbsp;&nbsp;//&nbsp;&nbsp;undefined
          <br/>
        </Typography>
        <span className={classes.light}>CONST</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          The const statement allows we to declare a constant variable, a value that can not be re-assign.
          <br/>
          <br/>
          <strong className={classes.dark}>
            {`const variable = 'foo'`}
          </strong>
          <br/>
          <strong className={classes.dark}>
            {`variable = 'bar' `}
          </strong>
          &nbsp;&nbsp;//shows an error
          <br/>
          <br/>
          <strong className={classes.dark}>
            {`const numbers = [1, 2, 3]`}
          </strong>
          <br/>
          <strong className={classes.dark}>
            {`numbers = 1`}
          </strong>
          &nbsp;&nbsp;// shows an error
          <br/>
          <br/>
          <strong className={classes.dark}>
            {`numbers.push(4)`}
          </strong>
          &nbsp;&nbsp;// That will work fine.
          <br/>
          <br/>
          The way to think about this is to understand how JS store its values. When a string, for example, is created JS allocates it to a space in memory, when using <strong className={classes.light}>const</strong> the space allocated in memory can't be changed. That is why you can add elements to an array but not assing a variable to at new value that will use space in memory.
          <br/>
          <br/>
        </Typography>
        <Divider />
        <Typography  variant="body1" gutterBottom>
          <br/>
          <br/>
          <span className={classes.light}>ARROW FUNCTION</span>
          <br/>
          Arrow functions on its simplest explanation redefins how we can write function expression in JS, making it much shorter and we can omit curly braces, return keyword and if only one argument the paramaters around it.
          <br/>
          <br/>
        </Typography>
        <Typography variant="body1" className={classes.align}>
          We add an equal and a greater then sign after the argument after that the block body is placed inside curly braces.
          <br/>
          <strong className={classes.dark}>
            {`const timesTwo = ( n ) => { return n * 2 }`}
          </strong>
          <br/>
          <br/>
          Even more simple a one liner arrow function:
          <br/>
          This just work if the function is a one liner otherwise keep the curly braces. If the braces are not needed we can also omit the return keyword.
          <br/>
          If there is no paramenters add a couple of parentheses with nothing inside
          <br/>
          <strong className={classes.dark}>
            {`const doSomething = ( ) => // do something`}
          </strong>
          <br/>
          <br/>
          For functions that just have one argument the parentheses can be omitted:
          <br/>
          <strong className={classes.dark}>
            {`const minusTwo = param => param - 2`}
          </strong>
          <br/>
          <br/>
          <strong className={classes.light}>DETAILS:</strong>
          <br/>
          <br/>
          An arrow function does not have its own <strong className={classes.light}> .this. .arguments. .super. </strong> These function expressions should not be used as constructor or methods.
          <br/>
          <br/>
          Different then classic function expression, where the <strong className={classes.light}> this </strong> keyword is bound to the context where the function is called, Arrow function gets lexically bind, meaning the <strong className={classes.light}> this </strong> keyword is bound to the scope in which the function was writen. That happens because when using Arrow function the function can not be bound to the <strong className={classes.light}> this </strong> keyword so JS will lexically go up the scope and use the value of <strong className={classes.light}> this </strong> from the scope in which it was defined.
          <br/>
          <br/>
          <strong className={classes.dark}>{`var obj = {`}</strong>
          <br/>
          <strong className={classes.dark}>&nbsp;&nbsp;&nbsp;{`name: Lara,`}</strong>
          <br/>
          <strong className={classes.dark}>&nbsp;&nbsp;&nbsp;{`hello: function sayHello() {`}</strong>
          <br/>
          <strong className={classes.dark}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`setTimeout(() => {`}</strong>
          <br/>
          <strong className={classes.dark}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`console.log('Hello ' + this.name);`}</strong>
          <br/>
          <strong className={classes.dark}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}, 5000);`}</strong>
          <br/>
          <strong className={classes.dark}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.dark}>{`};`}</strong>
          <br/>
          <strong className={classes.light}>{`// after 5 seconds this function would log Hello Lara `}</strong>
          <br/>
          If we were not using Arrow function we would have to use the <strong className={classes.light}> .bind() </strong> method to keep the expected value of <strong className={classes.light}> this </strong> connected to the inner function on run time.
          <br/>
          <br/>
          <strong className={classes.light}>{`When to NOT use arrow function expression:`}</strong>
          <br/>
          1. Object methods
          <br/>
          When you call the method the <strong className={classes.light}> this </strong> keyword is not bound to anything so it wont update anything on your object, instead it will inherit the value of this from its parent scope.
          <br/>
          <br/>
          2. Callback functions with dynamic context
          <br/>
          Imagine we want to have a click event on a button, since Arrow funtion does not bind to the  <strong className={classes.light}> this </strong> keyword instead of have your click event bound to the button it would actually be bind to the parent scope.
          <br/>
          <br/>
          <strong className={classes.light}>{`When to USE arrow function expression:`}</strong>
          <br/>
          Whenever we want to bind the  <strong className={classes.light}> this </strong>  keyword to the context and not to the funtion itself.
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>DEFAULT PARAMETERS</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          Default parameters are parameters that can have a default value as its passed to a function. One thing to keep in mind is that JS reads the parameters in order. If we have 2 parameters the second one should be the one to gets the default value otherwise if only one parameter is passed it will return an error.
          <br/>
          <br/>
          <strong className={classes.dark}>{`let TestDefaultParam = (a, b = 10) => {`}</strong>
          <br/>
          <strong className={classes.dark}>&nbsp;&nbsp;{`console.log(a+b);`}</strong>
          <br/>
          <strong className={classes.dark}>{`}`}</strong>
          <br/>
          <br/>
          <strong className={classes.dark}>{`TestDefaultParam(10, 20);`}</strong>  //&nbsp;&nbsp;30
          <br/>
          <strong className={classes.dark}>{`TestDefaultParam(10);`}</strong>  //&nbsp;&nbsp;20
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>LOOPS</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <strong className={classes.dark}>{`for in`}</strong>
          <br/>
          <strong className={classes.dark}>{`for of`}</strong>
          <br/>
          <br/>
        </Typography>
      </Paper>
    </div>
  );
}

ES6.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ES6);
