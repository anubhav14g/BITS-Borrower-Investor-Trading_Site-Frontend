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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProfileTable(props) {
  const application_id = props.match.params.application_id;
  
  const classes = useStyles();

  const [rowsData, setData]= useState();
  
  function callGetAPI(){
    axios.get(`https://anubhavg-bits.herokuapp.com/api/business_equity/view/closed/application/detailed/view/${application_id}`,{ headers: {"auth-token" : `${localStorage.getItem('bits-user-auth-token')}`}}).then(res=>{   
      // console.log(res.data['all_tests'])    
      setData(res.data['data'])
    }).catch(err=>{
        console.log(err);
    });
  }

  return (
    <div>
        <Navbar/>
        {callGetAPI()}
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
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    ))}
    </div>
  );
}
