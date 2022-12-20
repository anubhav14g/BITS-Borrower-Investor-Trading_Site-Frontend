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

  const [row, setData]= useState();
  
  function callGetAPI(){
    axios.get(`https://anubhavg-bits.onrender.com/api/investor/view/detailed/business/equity/application/${application_id}`,{ headers: {"auth-token" : `${localStorage.getItem('bits-user-auth-token')}`}}).then(res=>{    
      setData(res.data['data'])
    }).catch(err=>{
        console.log(err);
    });
  }

  return (
    <div>
        <Navbar/>
        {callGetAPI()}
        {!row && <div style={{marginLeft: '40rem',marginTop: '10rem'}}><CircularProgress/></div>}
        {row && <TableContainer component={Paper} style={{marginTop: "20px"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><h2>Name of Startup</h2></TableCell>
            <TableCell align="center"><h2>When Founded</h2></TableCell>
            <TableCell align="center"><h2>Aim of Business</h2></TableCell>
            <TableCell align="center"><h2>Future Expectation</h2></TableCell>
            <TableCell align="center"><h2>How Revenue Generates</h2></TableCell>
            <TableCell align="center"><h2>Why need Funding</h2></TableCell>
            <TableCell align="center"><h2>Total revenue till date</h2></TableCell>
            <TableCell align="center"><h2>Last month revenue</h2></TableCell>
            <TableCell align="center"><h2>Net profit rate</h2></TableCell>
            <TableCell align="center"><h2>Amount</h2></TableCell>
            <TableCell align="center"><h2>Equity demand percentage</h2></TableCell>
            <TableCell align="center"><h2>Created At</h2></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="center">{row.name_of_startup}</TableCell>
              <TableCell align="center">{row.when_founded}</TableCell>
              <TableCell align="center">{row.aim_of_business}</TableCell>
              <TableCell align="center">{row.future_expectation}</TableCell>
              <TableCell align="center">{row.how_revenue_generates}</TableCell>
              <TableCell align="center">{row.why_need_funding}</TableCell>
              <TableCell align="center">{row.total_revenue_till_date}</TableCell>
              <TableCell align="center">{row.last_month_revenue}</TableCell>
              <TableCell align="center">{row.net_profit_rate}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.equity_demand_percentage}</TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    }
    </div>
  );
}
