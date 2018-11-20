import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';

const styles  = theme => ({
  card: {
    minWidth: 275,
    margin: '30px',
    backgroundColor: '#f0f5f5',
  },
  title: {
    padding: '15px',
  },
  root: {
    justifyContent: 'center',
  },
  chip: {
    margin: theme.spacing.unit,
    color: '#334d4d',
    backgroundColor: '#739574',
  },
});

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#334d4d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f0f5f5',
      contrastText: '#334d4d',
    },
  },
});

class Welcome extends Component {

  render() {
    const { classes, move } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <MuiThemeProvider theme={theme}>
            <CardContent>
              <Typography className={classes.title} color="primary" variant="h3" gutterBottom>
                Welcome to my way of learning...
              </Typography>
              <Typography variant="button" gutterBottom color="primary">
                The big picture
              </Typography>
              <Typography variant="button" gutterBottom color="primary">
                  1. Cover JavaScript fundamental consepts.
              </Typography>
              <Typography variant="button" gutterBottom color="primary">
                  2. Work on challanges based on fundamentals.
              </Typography>
            </CardContent>
          </MuiThemeProvider>
        </Card>
        <div className={classes.root}>
          <Chip
            label="JavaScript Basic consepts"
            onClick={e => move('JavaScript')}
            className={classes.chip}
            avatar={
               <Avatar>
                 <DoneIcon />
               </Avatar>
             }
          />
          <Chip
            label="String Manipulation"
            onClick={e => move('JavaScript')}
            className={classes.chip}
            avatar={
               <Avatar>
                 <DoneIcon />
               </Avatar>
             }
          />
          <Chip
            label="Array Manipulation"
            onClick={e => move('JavaScript')}
            className={classes.chip}
            avatar={
               <Avatar>
                 <DoneIcon />
               </Avatar>
             }
          />
          <Chip
            label="Object Manipulation"
            onClick={e => move('JavaScript')}
            className={classes.chip}
            avatar={
               <Avatar>
                 <DoneIcon />
               </Avatar>
             }
          />
          <Chip
            label="Sorting Algorithms"
            onClick={e => move('JavaScript')}
            className={classes.chip}
            avatar={
               <Avatar>
                 <DoneIcon />
               </Avatar>
             }
          />
          <Chip
            label="Big O"
            onClick={e => move('JavaScript')}
            className={classes.chip}
            avatar={
               <Avatar>
                 <DoneIcon />
               </Avatar>
             }
          />
          <Chip
            label="ES6"
            onClick={e => move('JavaScript')}
            className={classes.chip}
            avatar={
               <Avatar>
                 <DoneIcon />
               </Avatar>
             }
          />
          <Chip
            label="React"
            onClick={e => move('LearnReact')}
            className={classes.chip}
            avatar={
               <Avatar>
                 <DoneIcon />
               </Avatar>
             }
          />
          <Chip
            label="Algorithms"
            onClick={e => move('Challanges')}
            className={classes.chip}
            avatar={
               <Avatar>
                 <DoneIcon />
               </Avatar>
             }
          />
          <Chip
            label="Design Architecture"
            onClick={e => move('Challanges')}
            className={classes.chip}
            avatar={
               <Avatar>
                 <DoneIcon />
               </Avatar>
             }
          />
        </div>
      </div>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
