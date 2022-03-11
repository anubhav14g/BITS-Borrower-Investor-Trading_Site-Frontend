import React,{ useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

export default function HomeInfo() {
  
  var [date,setDate] = useState(new Date());
    
  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="home-info-text">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <ul className="blink_me">
              <li>Get business equity or business loan</li>
              <li>Apply for personal loan</li>
              <li>Stay motivated</li>
              <li>Keep upgrading yourself with investor's tip</li>
              <li>Accept, reject or counter the offer</li>
              <li>Get your investment</li>
              <li>Keep growing yourself</li>
            </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1 style={{fontSize: "100px", marginBottom: "0px",marginLeft:"100px",marginTop: "10px"}}>{date.toLocaleTimeString()}</h1>
          <Link to="/signuplogin" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" style={{marginTop:"100px",marginLeft:100,width: "170px",
  height: "50px",color: '#FFFFFF',fontSize:'19px'}}><b>Signup/Login</b></Button></Link>
          <Button onClick={handleClickOpen} variant="contained" color="primary" style={{marginTop:"100px",marginLeft:50,width: "200px",
  height: "50px",color: '#FFFFFF',fontSize:'19px'}}><b>Investor's Tip</b></Button>
  <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Message"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This section is not ready yet, wait for the new updates...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        </Grid>
      </Grid>
    </div>
  );
}
