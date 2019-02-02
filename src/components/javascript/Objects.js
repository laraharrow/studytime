import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
  grid: {
    flexGrow: 1,
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

const Objects = (props) => {
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
          OBJECTS
          <br/>
          <br/>
        </Typography>
        <Typography  className={classes.align} variant="body1" gutterBottom>
          You can think of an Object as a box that you can store things and everything stored in that box (values) will have a labled (key).
          Objects are one great way to store data in JS its structure is composed of a key - value pair that are wrapped with {'{ }'}. Inside of an object you will have a KEY that would be the name associated to the value you are storing the keys on objects are always a string and that key has a value that can be of any type if the value is of type Function that would be consider a method of your object every other type would be a property.
          <br/>
          <br/>
          One interesting thing to notice about Objects is that nearly everything in JS is an object — arrays, functions, numbers, even strings — and they all have properties and methods associated to them.
        </Typography>
        <br/>
        <Divider />
        <br/>
        <br/>
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <strong  className={classes.light}>
            COMMON METHODOS:
          </strong>
          <br/>
          <br/>
          <strong className={classes.light}>Object.keys</strong>{" ( <obj's name> ) "} &nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp; returns an array with all the keys in the object.
          <br/>
          <strong className={classes.light}>Object.values</strong>{" ( <obj's name> ) "} &nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp; returns an array with all the values in the object.
          <br/>
          {"<obj's name> . "}<strong className={classes.light}>hasOwnProperty</strong>{" ( <obj's key> )"} &nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp; returns a boolean if the object has the passed key.
        </Typography>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <Typography className={classes.light} variant="body1" gutterBottom>
          <br/>
          CREATING AND MANIPULATING AN OBJECT:
          <br/>
          <br/>
        </Typography>
        <div className={classes.grid}>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Typography className={classes.align} variant="body1" gutterBottom>
                <span className={classes.code}>
                  {'var emptyObj1 = new Object( );'}
                  <br/>
                  <br/>
                  <br/>
                </span>
                <span className={classes.code}>
                  <br/>
                  {'var emptyObj2 = { };'}
                  <br/>
                  <br/>
                  <br/>
                </span>
                <span className={classes.code}>
                  <br/>
                  {'var objWithData = {'}
                  <br/>
                  &nbsp;&nbsp;&nbsp;{'sayHello: function() {'}
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"console.log('hello');"}
                  <br/>
                  &nbsp;&nbsp;&nbsp;{'},'}
                  <br/>
                  &nbsp;&nbsp;&nbsp;{"' name ': ' Lara ',"}
                  <br/>
                  &nbsp;&nbsp;&nbsp;{'1: false,'}
                  <br/>
                  {'};'}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.align} variant="body1" gutterBottom>
                <strong className={classes.light}>
                  NOTES:
                </strong>
                <br/>
                1. myObjWithData has key value pairs: where the key is sayHello the value is a function there for this is a method of our object.
                <br/>
                <br/>
                2. note how we have 3 different ways of expressing the objects keys they are all strings but the first one is not wrapped on quotes and the third is a number but JS converts it into a string since an objects key is alwasy a string.
                <br/>
                <br/>
                3. myEmptyObj1 is how you would create an empty object literal.
                <br/>
                <br/>
                4. myEmptyObj2 is creating an object using the new keyword.
                <br/>
                <br/>
              </Typography>
            </Grid>
          </Grid>
        </div>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <Typography  variant="button" gutterBottom>
          <br/>
          <br/>
          <strong className={classes.light}>
            How to add key value pairs to our empty object?
          </strong>
        </Typography>
        <div className={classes.grid}>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Typography className={classes.align} variant="body1" gutterBottom>
                <span className={classes.code}>
                  <br/>
                  &nbsp;&nbsp;OPTION 1:
                  <br/>
                  &nbsp;&nbsp;{'myEmptyObj . a = 1;'}
                  <br/>
                  <br/>
                  &nbsp;&nbsp;OPTION 2:
                  <br/>
                  &nbsp;&nbsp;{'myEmptyObj[ a ] = 1;'}
                  <br/>
                  <br/>
                  &nbsp;&nbsp;OPTION 3:
                  <br/>
                  &nbsp;&nbsp;{"var val = ' a '; "}
                  <br/>
                  &nbsp;&nbsp;{"myEmptyObj[ ' val ' ] = 1;"}
                  <br/>
                  <br/>
                </span>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.align} variant="body1" gutterBottom>
                <br/>
                <br/>
                <strong className={classes.light}>
                  NOTES:
                </strong>
                <br/>
                1. Options 1 and 2 do exactly the same as far as JS is consearned, - a - is the name of the key that will be added to the object.
                <br/>
                <br/>
                2. Option 3 instead of - a - being the key it's actually a variable that refers to the value of the key in this case the variable val has value of string a.
              </Typography>
            </Grid>
          </Grid>
        </div>
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
  );
}

Objects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Objects);
