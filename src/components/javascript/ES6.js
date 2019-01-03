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
    padding: theme.spacing.unit * 2,
    align: 'center',
    display:'inline-block',
    width: '75%',
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
        <br/>
        <span className={classes.light}>LET</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <br/>
          The let statement allows we to declare a variable with block scope. Avoiding hoisting to the block scope, very helpful for for loops and iterations.
          <br/>
          <br/>
          <strong className={classes.code}>{`let a = "outside";`}</strong>
          <br/>
          <strong className={classes.code}>{`if (true) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;{`let a = "inside";`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;{`console.log( a );`}</strong>
          <br/>
          <strong className={classes.code}>{`}`}</strong><span className={classes.code}>{` // "inside"`}</span>
          <br/>
          <strong className={classes.code}>{`console.log(a);`}</strong><span className={classes.code}>{` // "outside"`}</span>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>CONST</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <br/>
          The const statement allows we to declare a constant variable, a value that can not be re-assign.
          <br/>
          <br/>
          <strong className={classes.code}>{`const variable = 'foo'`}</strong>
          <br/>
          <strong className={classes.code}>{`variable = 'bar' `}</strong>
          <span className={classes.code}>{`//shows an error`}</span>
          <br/>
          <strong className={classes.code}>{`const numbers = [1, 2, 3]`}</strong>
          <br/>
          <strong className={classes.code}>{`numbers = 1`}</strong>&nbsp;&nbsp;
          <span className={classes.code}>{`// shows an error`}</span>
          <br/>
          <strong className={classes.code}>{`numbers.push(4)`}</strong>&nbsp;&nbsp;
          <span className={classes.code}>{`// That will work fine.`}</span>
          <br/>
          <br/>
          The way to think about this is to understand how JS store its values. When a string, for example, is created JS allocates it to a space in memory, when using <strong className={classes.light}> const </strong> the space allocated in memory can't be changed. That is why you can add elements to an array but not assing a variable to at new value that will use space in memory.
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>TEMPLATE LITERALS - STRING INTERPOLATION</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <br/>
          enclosing the string in <strong className={classes.code}>{'` `'}</strong> back-tick we can add variables and new lines to the string in a much simpler way.
          <br/>
          By pressing return inside the string back-tick enclosed for a new line
          By adding the sintax: <strong className={classes.code}>{'${ variable name goes here }'}</strong> to add variables inside your string.
          <br/>
          <br/>
          <strong className={classes.code}>{`const customer = "Lara"`}</strong>
          <br/>
          <strong className={classes.code}>{'const card = { amount: 7, product: "Bar", unitprice: 42 }'}</strong>
          <br/>
          <strong className={classes.code}>{'const message = `'}</strong>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<strong className={classes.code}>{'Hello ${customer},'}</strong>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<strong className={classes.code}>{'want to buy ${card.amount} ${card.product} for'}</strong>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<strong className={classes.code}>{'a total of ${card.amount * card.unitprice} bucks?'}</strong>
          <br/>
          <strong className={classes.code}>{'`;'}</strong>
          <br/>
          <strong className={classes.code}>{'console.log(message)'}</strong>
          <br/>
          <br/>
          <span className={classes.code}>{`// Hello Lara`}</span>
          <br/>
          <span className={classes.code}>{`// want ot buy 7 Bar for`}</span>
          <br/>
          <span className={classes.code}>{`// a total of 294 bucks?`}</span>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>ARROW FUNCTION</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
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
            {`const doSomething = ( ) =>`}
          </strong>
          <span className={classes.code}>&nbsp;{`// do something`}</span>
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
          <span className={classes.code}>{`// after 5 seconds this function would log Hello Lara`}</span>
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
        <br/>
        <span className={classes.light}>IMPORT - EXPORT</span>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          Export and Import are used to trunsfer data from one file to another. Using <strong className={classes.dark}>EXPORT</strong> form the file where the code is written and <strong className={classes.dark}>IMPORT</strong> from the file where we would like to use the code.
          <br/>
          Assume that all files are in the same directory.
          <br/>
          <br/>
        </Typography>
          <strong className={classes.dark}>Named exports</strong>
          <span className={classes.dark}> - one per module</span>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <span className={classes.code}>{`// file name index.js`}</span>
          <br/>
          <strong className={classes.code}>{`export const square = function(x) {`}</strong>
          <br/>
          &nbsp;&nbsp;&nbsp;<strong className={classes.code}>{`return x * x;`}</strong>
          <br/>
          <strong className={classes.code}>{`export const add = function(x, y) {`}</strong>
          <br/>
          &nbsp;&nbsp;&nbsp;<strong className={classes.code}>{`return (x + y);`}</strong>
          <br/>
          <strong className={classes.code}>{`}`}</strong>
          <br/>
          <br/>
          There are to ways to import data to a new file:
          <br/>
          <br/>
          <span className={classes.code}>{`// file name main.js`}</span>
          <br/>
          <strong className={classes.dark}>{`1.`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>{`import { square, add } from './index';`}</strong>
          <br/>
          <strong className={classes.code}>{`console.log(square(11));`}</strong>
          <span className={classes.code}>{`// 121`}</span>
          <br/>
          <strong className={classes.code}>{`console.log(add(4, 3));`}</strong>
          <span className={classes.code}>{`// 7`}</span>
          <br/>
          <br/>
          <strong className={classes.dark}>{`2.`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>{`import * as func from './index';`}</strong>
          <br/>
          <strong className={classes.code}>{`console.log(funct.square(11));`}</strong>
          <span className={classes.code}>{`// 121`}</span>
          <br/>
          <strong className={classes.code}>{`console.log(funct.add(4, 3));`}</strong>
          <span className={classes.code}>{`// 7`}</span>
          <br/>
          <br/>
        </Typography>
        <strong className={classes.dark}>Default exports</strong>
        <span className={classes.dark}> - multiple per module</span>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <span className={classes.code}>{`// file name myFunction.js`}</span>
          <br/>
          <strong className={classes.dark}>{`export default function () { ... };`}</strong>
          <br/>
          <br/>
          <span className={classes.code}>{`// file name main.js`}</span>
          <br/>
          <strong className={classes.code}>{`import myFunction from './myFunction';`}</strong>
          <br/>
          To use the function just call it with:  <strong className={classes.dark}>{`myFunction()`}</strong>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>ENHANCED OBJECT PROPERTIES</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <br/>
          Property Shorthand:
          <br/>
          Shorter syntax for common object property definition idiom. Used when an object key and value come from a variable and and the key will have the same name as the variable.
          <br/>
          <br/>
          <strong className={classes.code}>{`let x = 1, y = 2`}</strong>
          <br/>
          <strong className={classes.code}>{`let obj = { x, y }`}</strong>
          <br/>
          <strong className={classes.code}>{`console.log(obj)`}</strong>
          <br/>
          <br/>
          <span className={classes.code}>{`// obj = { x: 1, y: 2 }`}</span>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>DESTRUCTURING ASSIGNMENT</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <br/>
          The term destructuring refers to breaking up the structure of an entity. The destructuring assignment syntax in JavaScript makes it possible to extract data from arrays or objects into distinct variables.
          <br/>
          <br/>
        </Typography>
          <strong className={classes.dark}>{`ARRAY`}</strong>
          <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          Dicustruct Arrays and assign its elements to variables.
          <br/>
          Using the normal array brackts <strong className={classes.code}>{`[ ]`}</strong> add variable names intead of the element at index leaving space between commas for the elements that don't nedd variable names make sure to add the array variable name after an equal sign to the end of the expression.
          <br/>
          <br/>
          <strong className={classes.code}>{`let numbers = [1,2,3,4]`}</strong>
          <br/>
          <strong className={classes.code}>{`let [a, , , b] = numbers`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>{'console.log(`variable a = ${a}, variable b = ${b}`)'}</strong>
          <br/>
          <span className={classes.code}>{`// variable a = 1, variable b = 4`}</span>
          <br/>
          <strong className={classes.code}>{'console.log(a + b)'}</strong>
          <br/>
          <span className={classes.code}>{`// 5`}</span>
          <br/>
          <strong className={classes.code}>{'[a, b] = [b, a]'}</strong>
          <br/>
          <strong className={classes.code}>{'console.log(`now variable a = ${a}, and now variable b = ${b}`)'}</strong>
          <br/>
          <span className={classes.code}>{`// variable a = 4, variable b = 1`}</span>
          <br/>
          <br/>
        </Typography>
          <strong className={classes.dark}>{`OBJECT`}</strong>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          Dicustruct Objects and assign its elements to variables.
          <br/>
          Simalrly to Arrays for Objects use the <strong className={classes.code}>{`{ }`}</strong> add key names inside the brackets and after it an equal sign and the object name at the end of the expression. The new variables will have the object key as its name and the object value as its value.
          <br/>
          <br/>
          <strong className={classes.code}>{`let Obj = { name: 'Lara', age: 31 }`}</strong>
          <br/>
          <strong className={classes.code}>{`let {name, age} = Obj`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>{'console.log(`this is the variable name: ${name}. and this is the variable age: ${age}`)'}</strong>
          <br/>
          <span className={classes.code}>{'// this is the variable name: Lara. and this is the variable age: 31`)'}</span>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>DEFAULT PARAMETERS</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <br/>
          Default parameters are parameters that can have a default value as its passed to a function. One thing to keep in mind is that JS reads the parameters in order. If we have 2 parameters the second one should be the one to gets the default value otherwise if only one parameter is passed it will return an error.
          <br/>
          <br/>
          <strong className={classes.code}>{`let TestDefaultParam = (a, b = 10) => {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;{`console.log(a + b);`}</strong>
          <br/>
          <strong className={classes.code}>{`}`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>{`TestDefaultParam(10, 20);`}</strong>
          <span className={classes.code}>{`// 30`}</span>
          <br/>
          <strong className={classes.code}>{`TestDefaultParam(10);`}</strong>
          <span className={classes.code}>{`// 20`}</span>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
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
          <span className={classes.code}>&nbsp;{`// a`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 1`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// b`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 2`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// c`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 3`}</span>
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
          <span className={classes.code}>&nbsp;{`// 1`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 2`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 3`}</span>
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
          <span className={classes.code}>&nbsp;{`// L`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// a`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// r`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// a`}</span>
          <br/>
          <br/>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>SPREAD ATTRIBUTES</span>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <br/>
          The Spread Attributes works by transforming given elemnets into an array or transforming an array into separeted elements. The symbol used to represent the spread attribute is <strong className={classes.light}> ... </strong>
          <br/>
          <br/>
          Let's look at this function that recieves an array and returns the sum of all elements in it.
          <br/>
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
          <span className={classes.code}>&nbsp;{`// returns 300`}</span>
          <br/>
          <br/>
          Math. max is an simple method that will return the greatest numeber passed, but it eill return an error if what is passed is an array. Thanks to the Spread Attribute we can transform the array into separeted elements.
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>MAP</span>
        <br/>
        <br/>
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
          <span className={classes.code}>&nbsp;{`// will return 'Rachel' and not 'Lara'. The value stored under the key 'name' is now replaced.`}</span>
          <br/>
          <br/>
          Here are a few other interesting mathods of <strong className={classes.light}> MAP </strong>:
          <br/>
          <strong className={classes.code}>&nbsp;{`map.size;`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// 3`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// Returns the number of pairs inside the map.`}</span>
          <br/>
          <strong className={classes.code}>&nbsp;{`map.keys();`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// Return only the keys referent to map.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 'name'`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 'age'`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 'job'`}</span>
          <br/>
          <strong className={classes.code}>&nbsp;{`map.values();`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// Returns all the values referent to map.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 'Rachel'`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 30`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 'engineer'`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`for (let value of map.values()) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`console.log(value)`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// The little loop above will output all values inside map.`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 'Rachel'`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 30`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// 'engineer'`}</span>
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
          <br/>
          This loop now will output multiple arrays with the key values pairs inside map.
          <br/>
          <span className={classes.code}>&nbsp;{`// ['name', 'Rachel']`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// ['age, 30]`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// ['job', 'engineer']`}</span>
          <br/>
          <br/>
          There is one optimazation that can be made to the work above.
          <strong className={classes.code}>&nbsp;{`for (let [key, value] of map) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{'console.log(`key - value` );'}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <br/>
          Now the output would look like so:
          <br/>
          <span className={classes.code}>&nbsp;{`// name - Rachel`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// age - 30`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`// job - engineer`}</span>
          <br/>
          <br/>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>SET</span>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          SETs are used to store unique values of any types and we can iterate through all values stored.
          <br/>
          To initalize a <strong className={classes.light}> set </strong> we can use the keyword <strong className={classes.light}> new </strong>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`var sets = new Set();`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`sets.add('a');`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`sets.add('b');`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`sets.add('a');`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// We are adding duplicate value.`}</span>
          <br/>
          <strong className={classes.code}>&nbsp;{`for (let element of sets) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`console.log(element);`}</strong>
          <br/>
          The output in this case will be:
          <br/>
          <span className={classes.code}>&nbsp;{`a`}</span>
          <br/>
          <span className={classes.code}>&nbsp;{`b`}</span>
          <br/>
          <br/>
          Set also has the method size that works just like the map one, and the method has that it will return a boolean on weather or not the argument passed is part of the <strong className={classes.light}> set </strong>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>SETTER - GETTER</span>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          These two methods are very common when working with <strong className={classes.light}> classes </strong> we have a seperate space to talk about it, but in here we will show an example nad try to explain how to use <strong className={classes.light}> setter </strong> and <strong className={classes.light}> getter </strong>.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`class People {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`constructor(name) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.name = name;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`get Name() {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return this.name`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`set Name(name) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.name = name;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let person = new People("Michael");`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`console.log(person.Name);`}</strong>
          <span className={classes.code}>&nbsp;{`// Michael`}</span>
          <br/>
          <strong className={classes.code}>&nbsp;{`person.Name = "Rachel";`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`console.log(person.Name);`}</strong>
          <span className={classes.code}>&nbsp;{`// Rachel`}</span>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <span className={classes.light}>NEW BUILD-IN METHODS</span>
        <br/>
        <br/>
        <strong className={classes.dark}>Object.assign()</strong>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          This method is used to copy values from other Objects and create a new Object. Also used to clone objects.
          <br/>
          <strong className={classes.light}> Object.assign() </strong> will return an object acossiated witht he variable name passed to it.
          <br/>
          One thing to be aware is that if you have multiple keys with the same name, this method will take the value from the last key value pair added to the method.
          <br/>
          Here are some examples:
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let obj1 = {a: "foo", b: "bar", c:"foobar"}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`let obj2 = Object.assign(obj1, c: 1, d: 2, e: 3}`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`console.log(obj2)`}</strong>
          <span className={classes.code}>&nbsp;{`// a: "foo", b: "bar", c: 1, d: 2, e: 3`}</span>
          <br/>
          <br/>
          Now lets say we want to clone an object but it will have a different space in memory. We can use <strong className={classes.light}> Object.assign() </strong> to acomplish that.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let obj = {a: 1, b: 2, c: 3}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`let coppy = Object.assign({}, obj)`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`console.log(obj)`}</strong>
          <span className={classes.code}>&nbsp;{`// a: 1, b: 2, c:3`}</span>
          <br/>
          <strong className={classes.code}>&nbsp;{`console.log(copy)`}</strong>
          <span className={classes.code}>&nbsp;{`// a: 1, b: 2, c: 3`}</span>
          <br/>
          <br/>
          Now to the part where the new object aloquetes a different space in memory:
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`copy.d = 4`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`console.log(obj)`}</strong>
          <span className={classes.code}>&nbsp;{`// a: 1, b: 2, c:3`}</span>
          <br/>
          <strong className={classes.code}>&nbsp;{`console.log(copy)`}</strong>
          <span className={classes.code}>&nbsp;{`// a: 1, b: 2, c: 3, d: 4`}</span>
        </Typography>
        <br/>
        <br/>
        <strong className={classes.dark}>Array Element Finding</strong>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          The <strong className={classes.light}> .find( ) </strong> method will return the first element that is finds acording to the function we pass.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`[ 1, 3, 4, 2 ].find(x => x > 3) `}</strong>
          <span className={classes.code}>&nbsp;{`// 4`}</span>
          <br/>
          <br/>
          The <strong className={classes.light}> .findIndex( ) </strong> works the same but the return value will be the index.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`[ 1, 3, 4, 2 ].findIndex(x => x > 3) `}</strong>
          <span className={classes.code}>&nbsp;{`// 2`}</span>
        </Typography>
        <br/>
        <br/>
        <strong className={classes.dark}>String Searcha dn Repeat</strong>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          The <strong className={classes.light}> .repeat( ) </strong> method will repeat the passed argument as many times as we determine in the code.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`"foo".repeat(3) `}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// "foofoofoo"`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`"bar".repeat(3 * 2) `}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// "barbarbarbarbarbar"`}</span>
          <br/>
          <br/>
          A great search method for strings is the <strong className={classes.light}> .includes( ) </strong> it works by accepting a string and a character or characters ans checking if the charaters passed are part of the string or not. It will return a bollean.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`"hello".includes("ell")`}</strong>
          <span className={classes.code}>&nbsp;{`// true`}</span>
        </Typography>
        <br/>
        <br/>
        <strong className={classes.dark}>Number Manipulation</strong>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          To check if a variable is a number or not we can use the <strong className={classes.light}> Number.isNan( ) </strong> method that will return a boolean. o whatever you pass as argument.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`Number.isNaN(NaN)`}</strong>
          <span className={classes.code}>&nbsp;{`// true`}</span>
          <br/>
          <strong className={classes.code}>&nbsp;{`Number.isNaN(42)`}</strong>
          <span className={classes.code}>&nbsp;{`// false`}</span>
          <br/>
          <strong className={classes.code}>&nbsp;{`Number.isNaN("foo")`}</strong>
          <span className={classes.code}>&nbsp;{`// true`}</span>
          <br/>
          <br/>
          To shortin or as the method sugestes truncate a decimal number we can use the <strong className={classes.light}> Math.trunc( ) </strong>.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`Math.trunc(42.7)`}</strong>
          <span className={classes.code}>&nbsp;{`// 42`}</span>
          <br/>
          <br/>
          <br/>
          <br/>
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
