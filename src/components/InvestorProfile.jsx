import React from 'react';
import Navbar from "./Navbar.jsx";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function Profile(){
    
    function logout(){
        localStorage.removeItem('bits-user-auth-token');
        localStorage.removeItem('bits-user-type');
    }

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
        <Link to="/viewbusinessequityapplications" style={{ textDecoration: 'none'}}><Button variant="contained" color="primary" style={{marginTop:"10px",marginLeft:"20px",width: "260px",
        height: "100px",color: '#FFFFFF',fontSize:'19px'}}><b>View Business Equity Applications</b></Button></Link>
        <Button onClick={handleClickOpen} variant="contained" color="primary" style={{marginTop:"10px",marginLeft:"10px",width: "260px",
        height: "100px",color: '#FFFFFF',fontSize:'19px'}}><b>View Business Loan Applications</b></Button>
        <Button onClick={handleClickOpen} variant="contained" color="primary" style={{marginTop:"10px",marginLeft:"10px",width: "260px",
        height: "100px",color: '#FFFFFF',fontSize:'19px'}}><b>View Personal Loan Applications</b></Button>
        <Link to="/createinvestortip" style={{ textDecoration: 'none'}}><Button variant="contained" color="primary" style={{marginTop:"10px",marginLeft:"10px",width: "260px",
        height: "100px",color: '#FFFFFF',fontSize:'19px'}}><b>Create Investor Tip</b></Button></Link>
        <Link to="/" style={{ textDecoration: 'none'}}><Button onClick={logout} variant="contained" color="primary" style={{marginTop:"-100px",marginLeft:"1150px",width: "170px",
  height: "50px",color: '#FFFFFF',fontSize:'19px'}}><b>Log Out</b></Button></Link>
        <h1 style={{color: 'blue'}} className="blink_me">Click on Buttons to display data or to view changes</h1>
        
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
    </div>
    );
}