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
          <br/>
          <br/>
        </Typography>
        <Typography  variant="body1" gutterBottom>
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
      </Paper>
    </div>
  )
}

PrototypeClasses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrototypeClasses);
