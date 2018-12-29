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
  code: {
    color: "#5b874b",
    textAlign: 'left',
    fontFamily: "Courier New",
    fontSize: 16,
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
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <span className={classes.light}>LET</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          The let statement allows we to declare a variable with block scope. Avoiding hoisting to the block scope, very helpful for for loops and iterations.
          <br/>
          <br/>
          <strong className={classes.code}>{`let a = 50;`}</strong>
          <br/>
          <strong className={classes.code}>{`if (true) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;{`let a = 60;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;{`console.log( a );`}</strong>
          <br/>
          <strong className={classes.code}>{`}`}</strong>&nbsp;&nbsp;//&nbsp;&nbsp;60
          <br/>
          <strong className={classes.code}>{`console.log(a);`}</strong> &nbsp;&nbsp;//&nbsp;&nbsp;undefined
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <span className={classes.light}>CONST</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          The const statement allows we to declare a constant variable, a value that can not be re-assign.
          <br/>
          <br/>
          <strong className={classes.code}>{`const variable = 'foo'`}</strong>
          <br/>
          <strong className={classes.code}>{`variable = 'bar' `}</strong>&nbsp;&nbsp;//shows an error
          <br/>
          <strong className={classes.code}>{`const numbers = [1, 2, 3]`}</strong>
          <br/>
          <strong className={classes.code}>{`numbers = 1`}</strong>&nbsp;&nbsp;// shows an error
          <br/>
          <strong className={classes.code}>{`numbers.push(4)`}</strong>&nbsp;&nbsp;// That will work fine.
          <br/>
          <br/>
          The way to think about this is to understand how JS store its values. When a string, for example, is created JS allocates it to a space in memory, when using <strong className={classes.light}>const</strong> the space allocated in memory can't be changed. That is why you can add elements to an array but not assing a variable to at new value that will use space in memory.
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <span className={classes.light}>ARROW FUNCTION</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          Arrow functions on its simplest explanation redefins how we can write function expression in JS, making it much shorter and we can omit curly braces, return keyword and if only one argument the paramaters around it.
          <br/>
          We add an equal and a greater then sign after the argument after that the block body is placed inside curly braces.
          <br/>
          <br/>
          <strong className={classes.code}>
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
          <br/>
          <strong className={classes.code}>
            {`const doSomething = ( ) => // do something`}
          </strong>
          <br/>
          <br/>
          For functions that just have one argument the parentheses can be omitted:
          <br/>
          <strong className={classes.code}>
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
          <strong className={classes.code}>{`var obj = {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`name: Lara,`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`hello: function sayHello() {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`setTimeout(() => {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`console.log('Hello ' + this.name);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}, 5000);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>{`};`}</strong>
          <br/>
          // after 5 seconds this function would log Hello Lara
          <br/>
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
        <span className={classes.light}>DEFAULT PARAMETERS</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          Default parameters are parameters that can have a default value as its passed to a function. One thing to keep in mind is that JS reads the parameters in order. If we have 2 parameters the second one should be the one to gets the default value otherwise if only one parameter is passed it will return an error.
          <br/>
          <br/>
          <strong className={classes.code}>{`let TestDefaultParam = (a, b = 10) => {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;{`console.log(a+b);`}</strong>
          <br/>
          <strong className={classes.code}>{`}`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>{`TestDefaultParam(10, 20);`}</strong>  //&nbsp;&nbsp;30
          <br/>
          <strong className={classes.code}>{`TestDefaultParam(10);`}</strong>  //&nbsp;&nbsp;20
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <span className={classes.light}>LOOPS</span>
        <br/>
        <br/>
        <strong className={classes.dark}>{`for in`}</strong>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          The <strong className={classes.light}>for in</strong> loop is a great way to iterate through Objects, because it returns every key existent in the object.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let obj = {a:1, b:2, c:3}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`for (let key in obj) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`console.log(key);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`console.log(obj[key]);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <br/>
          // a
          <br/>
          // 1
          <br/>
          // b
          <br/>
          // 2
          <br/>
          // c
          <br/>
          // 3
          <br/>
          <br/>
          When we console.log <strong className={classes.light}> key </strong>  we get every key in the object and when we console.log <strong className={classes.light}>obj[key]</strong> we can see every value in that object. We can use this loop with an array if we want to return the indexes instead of the elements stored at that location.
        </Typography>
        <br/>
        <br/>
        <strong className={classes.dark}>{`for of`}</strong>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          The <strong className={classes.light}>for of</strong> on the other hand works very well with Arrays. It returns every element in order from the array.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let arr = [1, 2, 3]`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`for (let item of arr) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`console.log(item);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <br/>
          // 1
          <br/>
          // 2
          <br/>
          // 3
          <br/>
          <br/>
          This loop will return an error if an object is passed. But it makes for easy access when we are working with arrays. It can also iterate through strings.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let str = 'Lara'`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`for (let char of str) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`console.log(char);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <br/>
          // L
          <br/>
          // a
          <br/>
          // r
          <br/>
          // a
          <br/>
          <br/>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <span className={classes.light}>SPREAD ATTRIBUTES</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          The Spread Attributes works by transforming given elemnets into an array or transforming an array into separeted elements. The symbol used to represent the spread attribute is <strong className={classes.light}> ... </strong>
          <br/>
          <br/>
          Let's look at this function that recieves an array and returns the sum of all elements in it.
          <strong className={classes.code}>&nbsp;{`let SumAllElements = (...arr) => {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`let sum = 0;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`for (let item of arr) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;{`sum += item`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`return sum;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`SumAllElements(10, 20, 30)`}</strong>
          <br/>
          <br/>
          Note that we are not passing an array as an argument of SumAllElements. But the code will work because the spread attribute will transform the elements passed into an array.
          <br/>
          <br/>
          On the other hand if we do have an array but we actually want to separete all the elements we can also acomplesh that using the same method:
          <br/>
          <strong className={classes.code}>&nbsp;{`let arr = [1, 300, 20]`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`Math.max(...arr);`}</strong>
          <br/>
          // returns 300.
          <br/>
          <br/>
          Math. max is an simple method that will return the greatest numeber passed, but it eill return an error if what is passed is an array. Thanks to the Spread Attribute we can transform the array into separeted elements.
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <span className={classes.light}>MAP</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          Map is a combo of what we know as array and objects. The basic definition is that we can add our own key value pairs, but the key has to be unique.
          <br/>
          To initialize an instance of <strong className={classes.light}> MAP </strong> use the keyword <strong className={classes.light}> new</strong>.
          <br/>
          To add elements to your <strong className={classes.light}> MAP </strong> use the method <strong className={classes.light}> .set() </strong> where the first argument passed is the key or index and the second is the value. To see the element at specific key or index use the method <strong className={classes.light}> .get() </strong> passing the specific key or index as the argument.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`const map = new Map();`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`map.set('name', 'Lara')`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`map.set('age', 30)`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`map.set('job', 'engineer')`}</strong>
          <br/>
          <br/>
          Now if we were to try adding another pair where the key or index is the same as one of the above, instead of adding it, <strong className={classes.light}> MAP </strong> replaces the already added value.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`map.set('name', 'Rachel')`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`map.get('name')`}</strong>
          <br/>
          // will return 'Rachel' and not 'Lara'. The value stored under the key 'name' is now replaced.
          <br/>
          <br/>
          Here are a few other interesting mathods of <strong className={classes.light}> MAP </strong>:
          <br/>
          <strong className={classes.code}>&nbsp;{`map.size;`}</strong>
          <br/>
          // 3. Returns the number of pairs inside the map.
          <br/>
          <strong className={classes.code}>&nbsp;{`map.keys();`}</strong>
          <br/>
          // Return only the keys referent to map.
          <br/>
          // 'name'
          <br/>
          // 'age'
          <br/>
          // 'job'
          <br/>
          <strong className={classes.code}>&nbsp;{`map.values();`}</strong>
          <br/>
          // Returns all the values referent to map.
          <br/>
          // 'Rachel'
          <br/>
          // 30
          <br/>
          // 'engineer'
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`for (let value of map.values()) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`console.log(value)`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          // The little loop above will output all values inside map.
          <br/>
          // 'Rachel'
          <br/>
          // 30
          <br/>
          // 'engineer'
          <br/>
          <br/>
          Now let's say we want to loop through our map and output the key value pair. We can acomplash that using the same <strong className={classes.light}> for of </strong> method.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`for (let pair of map) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`console.log(pair);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          // This loop now will output multiple arrays with the key values pairs inside map.
          <br/>
          // ['name', 'Rachel']
          <br/>
          // ['age, 30]
          <br/>
          // ['job', 'engineer']
          <br/>
          <br/>
          There is one optimazation that can be made to the work above.
          <strong className={classes.code}>&nbsp;{`for (let [key, value] of map) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{'console.log(`key - value` );'}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          // Now the output would look like so:
          <br/>
          // name - Rachel
          <br/>
          // age - 30
          <br/>
          // job - engineer
          <br/>
          <br/>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <span className={classes.light}>SET</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          SETs are used to store unique values of any types and we can iterate through all values stored.
          <br/>
          To initalize a <strong className={classes.light}> set </strong> we can use the keyword <strong className={classes.light}> new </strong>
          <br/>
          Set also has the method size that works just like the map one, and the method has that it will return a boolean on weather or not 
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          // Now
        </Typography>
      </Paper>
    </div>
  );
}

ES6.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ES6);
