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
  const tip_id = props.match.params.tip_id;
  
  const classes = useStyles();

  const [rowsData, setData]= useState();
  
  function callGetAPI(){
    axios.get(`https://anubhavg-bits.onrender.com/api/investor_tip/get/all/comments/tip/${tip_id}`).then(res=>{     
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
        {rowsData  && rowsData.map((row) => (
          <TableContainer component={Paper} style={{marginTop: "20px"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><h2>Name</h2></TableCell>
            <TableCell align="center"><h2>Email</h2></TableCell>
            <TableCell align="center"><h2>Comment</h2></TableCell>
            <TableCell align="center"><h2>Created At</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.comment}</TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    ))}
    </div>
  );
}
