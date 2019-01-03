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

const ValuesVar = (props) => {
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
          Values
        </Typography>
        <Typography  variant="body1" gutterBottom>
          Values are the representation of any piece of information that you add to your code,
          <br/>
          JavaScript has built-in value types to help you manage the data you are working with.
        </Typography>
        <Divider />
        <br/>
        <Typography className={classes.light} variant="button" component="h2">
          Primitive Value Types
        </Typography>
        <br/>
        <Typography variant="body1" gutterBottom>
          <strong className={classes.light}>String:</strong> Are the type of value that represents text, and has to be wrapd in single or double quotes.
          <br/>
          <span className={classes.code}>
            "I am a string"
            <br/>
            'also a string over here'
          </span>
          <br/>
          <strong className={classes.light}>Number:</strong> Very self explanaroty this is JavaScript representation for any type of numeric values.
          <br/>
          <span className={classes.code}>
            42
            &nbsp;&nbsp;~&nbsp;&nbsp;
            -99
            &nbsp;&nbsp;~&nbsp;&nbsp;
            0.765
          </span>
          <br/>
          <strong className={classes.light}>Boolean:</strong> Those are the two option values usually used as response to a compareson.
          <br/>
          <span className={classes.code}>
            true&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;false
          </span>
          <br/>
        </Typography>
        <Divider />
        <br/>
        <Typography className={classes.light} variant="button" component="h2">
          comparaisson
        </Typography>
        <br/>
        <Typography variant="body1" gutterBottom>
          JavaScript has two main ways of comparaing values, one can be called loose comparaisson where you use double equals to compare elements, and the other can be called strict comparaisson using triple equal signs. The difference here is that with the loose equals == JS will convert one of the values, trying to find equality between them. While the strict equals === will do a deep compareson starting with the data type. One example of that would convertion would be comparing a string of a number agains a number of the same value:
          <br/>
          <br/>
          <span className={classes.code}>
            1 == '1'  // returns true
            <br/>
            1 === '1'  // returns false
          </span>
          <br/>
          <br/>
          Since javascript will consider them both as numbers it will return true.
          double equals == tests for abstract iquality
          triple equals === tests for equality on the data type before the value.
        </Typography>
        <Divider />
        <br/>
        <Typography className={classes.light} variant="button" component="h2">
          Variable
        </Typography>
        <br/>
        <Typography variant="body1" gutterBottom>
          <span className={classes.dark}>
            &nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <br/>
          <br/>
          JavaScript use variables to store values, so that you can acsses the value at any time. The way javascript does that is by using the keyword VAR in front of the name that will represent that value:
          <br/>
          <br/>
          <span className={classes.code}>
            var foo = 123;
            <br/>
            var bar = '123';
          </span>
          <br/>
          <br/>
          There it is two variables that now can be accessble and can be manipulated:
          <br/>
          <br/>
          <span className={classes.code}>
            foo = foo * 2  // 246
            <br/>
            bar = 'This is the old value of foo ' + bar;
            <br/>
            // This is the old value of foo 123
          </span>
          <br/>
          <br/>
          On the first example we are multiplying the value of the variable foo by 2 and setting the result of the multiplication as the new value of foo.
          <br/>
          On the second example we are adding some text to our string stored under the variable bar, basically we are addting new text to the value of the variable bar and keeping the original value as part of it.
        </Typography>
      </Paper>
    </div>
  );
}

ValuesVar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ValuesVar);
