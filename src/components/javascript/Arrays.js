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
    width: '95%',
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

const Arrays = (props) => {
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
          Arrays
          <br/>
          <br/>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Array is an organazed storage list where every element has an index referent to its position that starts at 0. To create an arrays wrapped its elements on {'[  ]'}
          <br/>
        </Typography>
        <Divider />
        <Typography className={classes.align} variant="body1" gutterBottom>
          <br/>
          <strong  className={classes.light}>
            COMMON METHODOS:
          </strong>
          <br/>
          <br/>
          <strong className={classes.code}>{'arr0 = [1, 2, 3];'}</strong>
          <br/>
          <strong className={classes.code}>{"arr1 = ['a', 'B', 'abc'];"}</strong>
          <br/>
          <strong className={classes.code}>{"arr2 = [true, {a: 1}, 'hello', 'world'];"}</strong>
          <br/>
          <br/>
          The <strong className={classes.light}>.push( )</strong>  method add the passed element(s) to the end of the array.
          <br/>
          Use <strong className={classes.light}>.unshift( )</strong> to add element(s) to the beginning of the array.
          <br/>
          <br/>
          <strong className={classes.code}>{'arr0.push({q: false}'})</strong>
          <br/>
          // In this case arr0 will become:
          <br/>
          <strong className={classes.code}>{'arr0 = [1, 2, 3, {q: false}];'}</strong>
          <br/>
          <br/>
          The <strong className={classes.light}>.pop( )</strong> method remove the last item in the array.
          <br/>
          Use <strong className={classes.light}>.shift( )</strong> to remove element(s) from the beginning of the array.
          <br/>
          <br/>
          <strong className={classes.code}>arr1.pop( )</strong>
          <br/>
          // The code above would remove the last element on arr1 and that will now become:
          <br/>
          <strong className={classes.code}>{"arr1 = [a, 'B'];"}</strong>
          <br/>
          <br/>
          The slice method returns a new array that has the elements from index of the first arguemnt until index of the second argument minus one.
          <br/>
          If slice has only its first argument the method will assume that the second argument will be the array's length.
          <br/>
          if the first argument is a negative number slice will start from the end of the array and move backworkds.
          <br/>
          After using the method slice on arr2 nothing changes on arr2 but the variable that we set <span className={classes.light}>new2</span> will become:
          <br/>
          <strong className={classes.code}>var new2 = arr2.slice(1, 3)</strong>
          <br/>
          <strong className={classes.code}>{"new2 = [{a: 1}, 'hello'];"}</strong>
          <br/>
          <br/>
          The code below will return a new array that has all the elements inside all passed arrays and the new array is store on the variable passed, in this case collection.
          <br/>
          <strong className={classes.code}>var collection = arr0.concat( arr1, arr2)</strong>
          <br/>
          <strong className={classes.code}>{"collection = [1, 2, 3, 4, 'a', 'B', true, {a: 1}];"}</strong>
          <br/>
          <br/>
          <strong className={classes.code}>arr0.indexOf(1)</strong>
          <br/>
          the code above looks for the element passed as the first argument and start at the passed second element, if the segond element is not passed it will iterate the whole array. It returns the index where it was found, otherwise -1.
          <br/>
          In this case the return value would be: 0. Since the interger 1 is at position 0 inside arr0.
          <br/>
          <br/>
          <strong className={classes.code}>Array.isArray(arr)</strong>
          <br/>
          Sinse Arrays in JS are sintatically an objects, one good way to conform if the data you are using is indeed an array is by using the IsArray method, the return value of that metod is true or false.
          <br/>
          <br/>
        </Typography>
        <br/>
        <Divider />
        <Typography className={classes.light} variant="body1" gutterBottom>
          <br/>
          CREATING AND MANIPULATING AN ARRAY:
          <br/>
          <br/>
        </Typography>
        <Typography className={classes.align} variant="body1" gutterBottom>
          To create an array create a variable and add the items you want wraped in the {'[  ]'} or leave it empty to create an empty array.
          <br/>
          <strong className={classes.code}>{'let emptyArr = [ ];'}</strong>
          <br/>
          <strong className={classes.code}>{'let arr = [1, 2, 3];'}</strong>
          <br/>
          <br/>
          To find out how many elemnts your array has use the <strong className={classes.light}>.length</strong> on it.
          <br/>
          <br/>
          NOTE1:
          <br/>
          The length method return the number of elements in the array.
          <br/>
          <strong className={classes.code}>{'arr = [1, 2, 3];'}</strong>
          <br/>
          <strong className={classes.code}>{'arr.length = 3'}</strong>
          <br/>
          <br/>
          NOTE2:
          remember that arrays have index 0:
          <br/>
          <strong className={classes.code}>{'arr[0] = 1'}</strong>
          <br/>
          <strong className={classes.code}>{'arr[3] = undefined'}</strong>
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
  );
}

Arrays.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Arrays);
