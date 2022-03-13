import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar.jsx";
import CircularProgress from '@material-ui/core/CircularProgress';
import { TextField, InputAdornment, IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProfileTable(props) {
  const application_id = props.match.params.application_id;
  
  const classes = useStyles();

  const [rowsData, setData]= useState();

  const [message,setMessage]=useState();
  const [isOpened, setIsOpened] = useState(false);

  const [state,setState] = useState({
    amount : '',
    equity_demand_percentage: ''
  });

  const handleInputChange = (event) => {
      setState((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
      }));
  };

  const handleSubmit = (event,investor_id) => {
      event.preventDefault();
      axios.post(`https://anubhavg-bits.herokuapp.com/api/business_equity/open/application/counter/offer/${application_id}/${investor_id}`,state,{ headers: {"auth-token" : `${localStorage.getItem('bits-user-auth-token')}`}}).then(res=>{      
      setMessage(res.data['message'])
      setIsOpened(true)
      }).catch(err=>{
        setMessage(err.response.data.message)
        setIsOpened(true)
      });
  };
  
  function callGetAPI(){
    axios.get(`https://anubhavg-bits.herokuapp.com/api/business_equity/view/open/application/detailed/view/${application_id}`,{ headers: {"auth-token" : `${localStorage.getItem('bits-user-auth-token')}`}}).then(res=>{   
      // console.log(res.data['all_tests'])    
      setData(res.data['data'])
    }).catch(err=>{
        console.log(err);
    });
  }

  function callGetAPI2(investor_id){
    axios.get(`https://anubhavg-bits.herokuapp.com/api/business_equity/open/application/accept/offer/${application_id}/${investor_id}`,{ headers: {"auth-token" : `${localStorage.getItem('bits-user-auth-token')}`}}).then(res=>{      
      setMessage(res.data['message'])
      setIsOpened(true)
    }).catch(err=>{
      setMessage(err.response.data.message)
      setIsOpened(true)
    });
  }

  function callGetAPI3(investor_id){
    axios.get(`https://anubhavg-bits.herokuapp.com/api/business_equity/open/application/reject/offer/${application_id}/${investor_id}`,{ headers: {"auth-token" : `${localStorage.getItem('bits-user-auth-token')}`}}).then(res=>{      
      setMessage(res.data['message'])
      setIsOpened(true)
    }).catch(err=>{
      setMessage(err.response.data.message)
      setIsOpened(true)
    });
  }

  return (
    <div>
        <Navbar/>
        {callGetAPI()}
        {isOpened && <Button variant="contained" color="secondary" style={{marginTop:"20px",marginLeft:"400px",width: "570px",
  height: "100px",color: '#FFFFFF',fontSize:'19px'}}><b>{message}</b></Button>}
        {!rowsData && <div style={{marginLeft: '40rem',marginTop: '10rem'}}><CircularProgress/></div>}
        {rowsData && rowsData.map((row) => (
        <TableContainer component={Paper} style={{marginTop: "20px"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><h2>Investor Name</h2></TableCell>
            <TableCell align="center"><h2>Investor Email</h2></TableCell>
            <TableCell align="center"><h2>Investor Phone no</h2></TableCell>
            <TableCell align="center"><h2>Accepted</h2></TableCell>
            <TableCell align="center"><h2>Rejected</h2></TableCell>
            <TableCell align="center"><h2>Amount</h2></TableCell>
            <TableCell align="center"><h2>Equity demand percentage</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="center">{row.investor_name}</TableCell>
              <TableCell align="center">{row.investor_email}</TableCell>
              <TableCell align="center">{row.investor_phone_no}</TableCell>
              <TableCell align="center">{row.accepted && <Button>Yes</Button>}</TableCell>
              <TableCell align="center">{row.rejected && <Button>Yes</Button>}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.equity_demand_percentage}</TableCell>
              {!row.accepted && !row.rejected && row.last_countered_user_type=="Investor" && <TableCell align="center"><Button onClick={()=>{callGetAPI2(row.investor_id)}} variant="contained" color="primary" style={{marginTop:"10px",marginLeft:10,width: "250px",
              height: "40px",color: '#FFFFFF',fontSize:'19px'}}><b>Accept Offer</b></Button></TableCell>}
              {!row.accepted && !row.rejected  && row.last_countered_user_type=="Investor" && <TableCell align="center"><Button onClick={()=>{callGetAPI3(row.investor_id)}} variant="contained" color="primary" style={{marginTop:"10px",marginLeft:10,width: "250px",
              height: "40px",color: '#FFFFFF',fontSize:'19px'}}><b>Reject Offer</b></Button></TableCell>}
              {!row.accepted && !row.rejected  && row.last_countered_user_type=="Investor" && <TableCell align="center">
                <form onSubmit={(e)=> handleSubmit(e,row.investor_id)} noValidate>
                  <input
                  style={{marginTop:"30px",marginLeft:10,height: '30px',width: '330px',fontSize: '20px'}}
                  id="amount"
                  placeholder="Enter Counter Amount"
                  name="amount"
                  value={state.amount}
                  onChange={handleInputChange}
                  autoFocus
                  />
                  <input
                    style={{marginTop:"10px",marginLeft:10,height: '30px',width: '330px',fontSize: '20px'}}
                  id="equity_demand_percentage"
                  placeholder="Enter Equity Demand Percentage"
                  name="equity_demand_percentage"
                  value={state.equity_demand_percentage}
                  onChange={handleInputChange}
                  autoFocus
                  />
                  <Button type="submit" variant="contained" color="primary" style={{marginTop:"10px",marginLeft:10,width: "250px",
              height: "40px",color: '#FFFFFF',fontSize:'19px'}}><b>Counter Offer</b></Button>
                </form>
              </TableCell>}

              {!row.accepted && !row.rejected && row.last_countered_user_type=="Borrower" && <TableCell align="center"><Button disabled='true' onClick={()=>{callGetAPI2(row.investor_id)}} variant="contained" color="primary" style={{marginTop:"10px",marginLeft:10,width: "250px",
              height: "40px",color: '#FFFFFF',fontSize:'19px'}}><b>Accept Offer</b></Button></TableCell>}
              {!row.accepted && !row.rejected  && row.last_countered_user_type=="Borrower" && <TableCell align="center"><Button disabled='true' onClick={()=>{callGetAPI3(row.investor_id)}} variant="contained" color="primary" style={{marginTop:"10px",marginLeft:10,width: "250px",
              height: "40px",color: '#FFFFFF',fontSize:'19px'}}><b>Reject Offer</b></Button></TableCell>}
              {!row.accepted && !row.rejected  && row.last_countered_user_type=="Borrower" && <TableCell align="center">
                <form onSubmit={(e)=> handleSubmit(e,row.investor_id)} noValidate>
                  <input
                  style={{marginTop:"30px",marginLeft:10,height: '30px',width: '330px',fontSize: '20px'}}
                  id="amount"
                  placeholder="Enter Counter Amount"
                  name="amount"
                  value={state.amount}
                  onChange={handleInputChange}
                  autoFocus
                  />
                  <input
                    style={{marginTop:"10px",marginLeft:10,height: '30px',width: '330px',fontSize: '20px'}}
                  id="equity_demand_percentage"
                  placeholder="Enter Equity Demand Percentage"
                  name="equity_demand_percentage"
                  value={state.equity_demand_percentage}
                  onChange={handleInputChange}
                  autoFocus
                  />
                  <Button  disabled='true' type="submit" variant="contained" color="primary" style={{marginTop:"10px",marginLeft:10,width: "250px",
              height: "40px",color: '#FFFFFF',fontSize:'19px'}}><b>Counter Offer</b></Button>
                </form>
              </TableCell>}

            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    ))}
    </div>
  );
}
