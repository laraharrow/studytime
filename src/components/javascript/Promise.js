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

const Promise = (props) => {
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
        PROMISE - ASYNC | AWAIT
        <Typography className={classes.light} variant="h5" component="h3">
          Before we get into how we use <strong className={classes.light}> Promises </strong> and why we will use <strong className={classes.light}> Async | Await </strong> (ES6) instead. We need to understand the problem that they are solving.
          <br/>
          <br/>
          <Divider />
          <br/>
          <br/>
          <strong className={classes.dark}> ASYNCHRONOUS FUNCTIONS </strong>
          <br/>
          <br/>
          



          <strong className={classes.light}> ProtoType </strong>
          <strong className={classes.dark}> PROTOTYPE </strong>
          <strong className={classes.code}>&nbsp;{`obj.toString();`}</strong>
          <br/>
          <span className={classes.code}>&nbsp;{`// [object Object]`}</span>
        </Typography>
      </Paper>
    </div>
  )
}

Promise.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Promise);
