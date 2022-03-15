import React, { useState } from 'react';
import Navbar from "./Navbar.jsx";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

export default function CreateTest(){
    
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [isOpened, setIsOpened] = useState(false);

    const [ifError, setErrorMessage] = useState(true);

    const [state,setState] = useState({
        name_of_startup : '',
        when_founded : '',
        aim_of_business : '',
        future_expectation : '',
        how_revenue_generates : '',
        why_need_funding : '',
        total_revenue_till_date : '',
        last_month_revenue : '',
        net_profit_rate : '',
        amount : '',
        equity_demand_percentage : ''
    });
    
    const [message,setMessage] = useState()
    
    const handleInputChange = (event) => {
        setState((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        
        axios.post('https://anubhavg-bits.herokuapp.com/api/business_equity/create/application',state,{ headers: {"auth-token" : `${localStorage.getItem('bits-user-auth-token')}`}}).then(res=>{      
          
          if(res.data['status']=='false'){
            setMessage(res.data['message'])
            setIsOpened(true)
            setErrorMessage(true);
          }
          else{
            setMessage(res.data['message'])
            setIsOpened(true)
            setErrorMessage(false);
          }

        }).catch(err=>{
          setMessage(err.response.data.message)
          setIsOpened(true)
          setErrorMessage(true);
        });
    };

    return(
    <div>
        <Navbar/>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      {isOpened && <Button variant="contained" color="secondary" style={{marginTop:"0px",marginLeft:10,width: "570px",
  height: "100px",color: '#FFFFFF',fontSize:'19px'}}><b>{message}</b></Button> }
        {!ifError && <Redirect to="/businessequity"/>}
        <Typography component="h1" variant="h4" style={{color: "red"}}>
          Create the Business Equity Application...
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name_of_startup"
            label="Name of Startup"
            name="name_of_startup"
            value={state.name_of_startup}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="when_founded"
            label="When Founded??"
            name="when_founded"
            value={state.when_founded}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="aim_of_business"
            label="Aim of Business"
            name="aim_of_business"
            value={state.aim_of_business}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="future_expectation"
            label="Future Expectation"
            name="future_expectation"
            value={state.future_expectation}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="how_revenue_generates"
            label="How Revenue Generates??"
            name="how_revenue_generates"
            value={state.how_revenue_generates}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="why_need_funding"
            label="Why need Funding??"
            name="why_need_funding"
            value={state.why_need_funding}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="total_revenue_till_date"
            label="Total Revenue till date"
            name="total_revenue_till_date"
            value={state.total_revenue_till_date}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last_month_revenue"
            label="Last month Revenue"
            name="last_month_revenue"
            value={state.last_month_revenue}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="net_profit_rate"
            label="Net Profit Rate"
            name="net_profit_rate"
            value={state.net_profit_rate}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="amount"
            label="Amount"
            name="amount"
            value={state.amount}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="equity_demand_percentage"
            label="Equity demand percentage??"
            name="equity_demand_percentage"
            value={state.equity_demand_percentage}
            onChange={handleInputChange}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClickOpen}
          >
            Create
          </Button>
          <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Message"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Plz wait while processing is going on...
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
          </Dialog>
        </form>
      </div>
    </Container>
    </div>
    );
}