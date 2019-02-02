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

const Recursion = (props) => {
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
        <Typography className={classes.align} variant="body1" gutterBottom>
          This page will be updated with some new information soon.
        </Typography>
        <br/>
        <br/>
      </Paper>
    </div>
  )
}

Recursion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Recursion);
