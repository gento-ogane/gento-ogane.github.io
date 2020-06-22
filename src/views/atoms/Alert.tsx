import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const AlertStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export const SuccessAlert=()=>{
  const classes = AlertStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </div>
  );
}

export const ErrorAlert=()=> {
  const classes = AlertStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
    </div>
  );
}