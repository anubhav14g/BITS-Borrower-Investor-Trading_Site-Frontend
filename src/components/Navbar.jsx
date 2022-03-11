import React,{ useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(8),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:'#2E3B55'}}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h3" noWrap>
            <b>Welcome to the Borrower Investor Trading Site (BITS)</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
