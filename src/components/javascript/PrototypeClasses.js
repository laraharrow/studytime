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

const PrototypeClasses = (props) => {
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
          PROTOTYPE & CLASSES
        </Typography>
          <br/>
          <br/>
        <Typography  className={classes.align} variant="body1" gutterBottom>
          We are going to separate this article in 2 parts.
          <br/>
          First where we will discuss <strong className={classes.light}> ProtoType </strong> with the hope of getting a better understand of this very important subject for JavaScript.
          <br/>
          Second will be dedicated to <strong className={classes.light}> Classes </strong>, what it really is inside Javascript, and how to use and take advantage of it.
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
          JavaScript is a <strong className={classes.light}> prototype-based language </strong>. That means that every object shares a series of properties and methods and those can be accessed with the property <strong className={classes.light}> Prototype </strong>. One good thing to remember is that in Javascript's arrays and functions, well actually almost everything in JavaScript, are objects. As a result, anything can have properties assigned to it.
          <br/>
          To start with a big picture here we can think of <strong className={classes.light}> Prototype </strong> as the way that JavaScript objects uses to inherant features from one another.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let obj =  { }`}</strong>
          <br/>
          or
          <br/>
          <strong className={classes.code}>&nbsp;{`let obj1 = new Object( )`}</strong>
          <br/>
          <br/>
          How to find the <strong className={classes.light}> Prototype </strong> of an  object<strong className={classes.light}>?</strong>
          <br/>
          <strong className={classes.code}> Object.getPrototypeOf(obj); </strong>
          <br/>
          <br/>
          This method will output an object with a vairaity of methods and properties that are associated to the object that we create and it leaves on the most outer layer of any object property.
          <br/>
          <strong className={classes.code}>&nbsp;{`{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …}`}</strong>
          <br/>
          <br/>
          Every object has specific methods that are useful based on its specificities. Bellow are some examples of the methods that exisits inside the property <strong className={classes.light}> Prototype </strong>. As you will notice we can call them as you would any method and that is important to realize since we are suggesting that all those methods are automaticaly associated with every object.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`obj.toString();`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// [object Object]`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let arr = [1, 2, 3];`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`arr.pop()`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// arr = [1, 2]`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let str = "lara";`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`str.toUpperCase( )`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// "LARA"`}</span>
          <br/>
          <br/>
        </Typography>
        <strong className={classes.dark}> Prototype Chain && Inheritance </strong>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          All the methods above live inside the <strong className={classes.light}> Prototype Chain</strong>. That is inside the chain that starts at <strong className={classes.light}> Object.Prototype</strong>.
          <br/>
          One way to understand this chain is to think of it hierarchily, having the <strong className={classes.light}> Object.Prototype </strong> at the very top of the chain. Arrays, Strings and other object like data structures have their own properties and methods stored as childrens on this chain.
          <br/>
          When you call a method on a String, for example, JavaScript will look inside its scope for that method. If it is not found then JavaScript will go to the level above looking for the method. If after walking its way to the top of the chain JavaScript will return an error but not until it has checkd on every instance of the chain.
          <br/>
        </Typography>
        <strong className={classes.dark}> Constructor Functions </strong>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <br/>
          Now that we understand a little more about how JavaScript has access to the <strong className={classes.light}> Prototype chain </strong> we can introduce the idea that we can add our own methods and properties to our objects and use the chain to access it.
          <br/>
          <br/>
          <strong className={classes.light}>Constructor functions </strong> are functions that are used to construct new objects. The <strong className={classes.light}> new </strong> keyword is used to create new instances based off a constructor function.
          <br/>
          Let's use a RPG kind of game as our example. Our game has characters and every character will have specific attribute referents to what they can do. But in the most outter layer every character will have a name, a level, and hit points and that will be true of all characters. Let's start with that:
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`function RpgChar(name, level, hp) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;{`this.name = name;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;{`this.level = level;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;{`this.hp = hp;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`RpgChar.prototype.info = function () {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;{'return `${this.name} is at level ${this.level} and has ${this.hp} hit points.`'}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <br/>
          <br/>
          We just created a <strong className={classes.light}> RpgChar </strong> constructor that have the properties <strong className={classes.light}> name</strong>, <strong className={classes.light}> level</strong> and,  <strong className={classes.light}> hp </strong> that is going to be used for every instace of characters on this game. And the <strong className={classes.light}> this </strong> keyword will also refer to the spacific instance that we create. On our constructor we also have a method <strong className={classes.light}> info </strong> that is added to the prototype of our contructor RpgChar.
          <br/>
          <br/>
          Let's create the instance Buffy of our constructor:
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`let myChar = new RpgChar("Buffy", 17, 12);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`console.log(myChar);`}</strong>
          <span className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;{`// myChar = {name: "Buffy", level: 17, hp: 12}`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`myChar.info()`}</strong>
          <span className={classes.code}>&nbsp;&nbsp;{`// Buffy is at level 17 and has 12 hit points.`}</span>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`Object.getPrototypeOf(myChar);`}</strong>
          <span className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;{`// {greet: ƒ, constructor: ƒ RpgChar(name, level, hp)}`}</span>
          <br/>
          <br/>
          Above we can see that the methods and properties added to <strong className={classes.light}> RgpChar </strong> are accessible to every instance of that constructor and are stored on the <strong className={classes.light}> prototype chain </strong>.
          <br/>
          <br/>
          Now we want to introduce different classes for our characters: Worriors, Ninjas, Healers. But we also want our character to have access to our RpgChar constructor. We can accomplish that by using the method <strong className={classes.light}> .call() </strong> this method connects the value of <strong className={classes.light}> this </strong> with a different value that is passed to <strong className={classes.light}> .call() </strong>.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`function Ninja(name, level, hp, martialArt) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`RgpChar.call(this, name, level, hp);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`this.martialArt = martialArt;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`Ninja.prototype.attack = function () {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{'return `${this.name} uses the ${this.martialArt} to attack.`;'}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <br/>
          The constructor above have the <strong className={classes.light}> RpgChar </strong> properties and also new ones specific to its scope.
          <br/>
          Now we can create new character that are Ninjas and we can use their methods as well:
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`const char = new Ninja('Baffy', 17, 12, 'flying kick');`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`char.attack();`}</strong>
          <span className={classes.code}>&nbsp;{`// Buffy uses the flying kick to attack.`}</span>
          <br/>
          <br/>
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <strong className={classes.dark}> CLASSES </strong>
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          JavaScript does not really have the functionalities of classes like other laguages. But with ES6 the adiation of some "syntactical sugar" over prototypes and inheritance made possible for developers to use a clean and elegant syntax that works similar to classes in other laguages.
          <br/>
          Classes are actually functions. It work the same only making the way the developer will write the code cleaner and easier to read. Lets create a class using the same syntax as a function expression. To see that we can access <strong className={classes.light}> Object.Prototype</strong> as we would with a function.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`const myClass = class {}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`Object.getPrototypeOf(myClass);`}</strong>
          <span className={classes.code}>&nbsp;{`// ƒ () { [native code] }`}</span>
          <br/>
          <br/>
          As you can see above the newly created class returns from our <strong className={classes.light}> Prototype </strong> the same as a function would.
          <br/>
          With the same idea we can make any class into a contructor by using the <strong className={classes.light}> new </strong> keyword. Let's use the same RPG game idea to compare the function syntax with the class syntax.
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;{`class MyRPGclass {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;{`constructor( name, level, hp) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.name = name;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.level = level;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.hp = hp;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;{`info() {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'return `${this.name}` is at level `${this.level}` and has `${this.hp}` hit points.'}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <br/>
          Classes work as blueprint for objects, we just created a class with 3 parameters and one method.  Now we can use the MyRPGclass class to create a new objects with the same structure and with access to the methed from within that class.
          <br/>
          If we compare our class above with the function constructor we created before we can see that there are 2 main differences.
          <br/>
          1. Class uses the method <strong className={classes.light}> constructor </strong> to add all of its properties.
          <br/>
          2. Classes methods have less complexity on its way to be implemented and connected to its scope. We don't need to use the <strong className={classes.light}> prototype </strong> keywork to add the method to the classes with the ES6 syntax we just need to add the methods inside the classes parameters.
          <br/>
          Let's create an instance of our MyClass and see how it is structures on the <strong className={classes.light}> Prototype</strong>:
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`const newChar = new MyRPGclass('Hrothgar', 15, 11);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`console.log(MyRPGclass);`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;&nbsp;&nbsp;{`// MyRPGclass {name: 'Hrothgar', level: 15, hp: 11}`}</span>
          <br/>
          <span className={classes.code}>&nbsp;&nbsp;&nbsp;{`// __proto__:`}</span>
          <br/>
          <span className={classes.code}>&nbsp;&nbsp;&nbsp;{`// ▶ constructor: class MyRPGclass`}</span>
          <br/>
          <span className={classes.code}>&nbsp;&nbsp;&nbsp;{`//   ▶ info: ƒ info()`}</span>
          <br/>
          <br/>
          As we can see when we console.log the new instance of our class. The constructor and the method are inside of our class's <strong className={classes.light}> Prototype </strong> and not only on our new Char instance.
          <br/>
          <br/>
          The way to extend the parent class is actually much simpler instead of using the <strong className={classes.light}> .call </strong> method we will be using the method <strong className={classes.light}> super</strong>. Let's see what that looks like in code:
          <br/>
          <br/>
          <strong className={classes.code}>&nbsp;{`class Worrior extends MyRPGclass {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`constructor( name, level, hp, weapon ) {`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`super(name, level, hp);`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`this.weapon = weapon;`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;&nbsp;&nbsp;{`}`}</strong>
          <br/>
          <strong className={classes.code}>&nbsp;{`}`}</strong>
          <br/>
          <br/>
          So what is happening above?
          <br/>
          <br/>
          1. We are creating a new class that is a child of <strong className={classes.light}> MyRPGclass </strong> that is what the keyword <strong className={classes.light}> extends </strong> is doing.
          <br/>
          2. After we have the same method <strong className={classes.light}> constructor </strong> where we add the  properties of this class. As we can see we are adding properties from the parent class and adding a new one specific to the Worrior class.
          <br/>
           3. We are chaining our chaild constructor to out parent constructor, by using the method <strong className={classes.light}> super </strong>.
          <br/>
          4. Finally we are adding anew property to our class.
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

PrototypeClasses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrototypeClasses);
