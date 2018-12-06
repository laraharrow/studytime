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
        <Typography  variant="body1" gutterBottom>
          <br/>
          <br/>
          <span className={classes.light}>LET</span>
          <br/>
          The let statement allows you to declare a variable with block scope.
          <br/>
          Very helpful for for loops and iterations.
          <br/>
          <br/>
        </Typography>
        <Typography  variant="body1" gutterBottom>
          <span className={classes.light}>CONST</span>
          <br/>
          The const statement allows you to declare a constant variable, a value that can not be re-assign.
          <br/>
          <br/>
        </Typography>
        <Divider />
      </Paper>
    </div>
  );
}

ES6.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ES6);
