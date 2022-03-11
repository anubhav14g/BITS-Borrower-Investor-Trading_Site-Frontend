import React, { useState } from 'react';
import Navbar from "./Navbar.jsx";
import HomeInfo from "./Home-Info.jsx";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
  
export default function Header(){

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
    <div>
        <Navbar/>
        <Button onClick={handleClickOpen} variant="contained" color="primary" style={{marginTop:"10px",marginLeft:"5px",width: "170px",
  height: "50px",color: '#FFFFFF',fontSize:'19px'}}><b>Manual</b></Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Instructions Manual"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              1. How to Register
              <ul>
                  <li>click on create Signup/Login button</li>
                  <li>fill the details</li>
                  <li>you will be then registered and redirected to the profile page</li>
              </ul>
            </DialogContentText>
          </DialogContent>
          <DialogContent>
            <DialogContentText>
                2. How to Apply
                <ul>
                    <li>if you want to apply for business equity, click on business equity button</li>
                    <li>if you want to apply for business loan, click on business loan button</li>
                    <li>if you want to apply for personal loan, click on personal loan button</li>
                    <li>create the application by filling the details</li>
                    <li>investor's will see your applications</li>
                    <li>accept, reject or counter the offer</li>
                </ul>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <HomeInfo/>
    </div>
    );
}