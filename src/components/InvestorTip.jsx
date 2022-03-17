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
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProfileTable() {
  
  const classes = useStyles();

  const [rowsData, setData]= useState();

  const [message,setMessage]=useState();
  const [isOpened, setIsOpened] = useState(false);

  const [state,setState] = useState({
    comment : ''
  });

  const handleInputChange = (event) => {
      setState((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
      }));
  };

  const handleSubmit = (event,tip_id) => {
      event.preventDefault();
      axios.post(`https://anubhavg-bits.herokuapp.com/api/investor_tip/comment/tip/${tip_id}`,state,{ headers: {"auth-token" : `${localStorage.getItem('bits-user-auth-token')}`}}).then(res=>{      
      setMessage(res.data['message'])
      setIsOpened(true)
      }).catch(err=>{
        setMessage(err.response.data.message)
        setIsOpened(true)
      });
  };
  
  function callGetAPI(){
    axios.get('https://anubhavg-bits.herokuapp.com/api/investor_tip/view/all/tips').then(res=>{       
      setData(res.data['data'])
    }).catch(err=>{
        console.log(err);
    });
  }

  function callGetAPI2(tip_id){
    axios.get(`https://anubhavg-bits.herokuapp.com/api/investor_tip/like/tip/${tip_id}`,{ headers: {"auth-token" : `${localStorage.getItem('bits-user-auth-token')}`}}).then(res=>{      
      setMessage(res.data['message'])
      setIsOpened(true)
    }).catch(err=>{
      setMessage(err.response.data.message)
      setIsOpened(true)
    });
  }

  function callGetAPI3(tip_id){
    axios.get(`https://anubhavg-bits.herokuapp.com/api/investor_tip/dislike/tip/${tip_id}`,{ headers: {"auth-token" : `${localStorage.getItem('bits-user-auth-token')}`}}).then(res=>{      
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
            <TableCell align="center"><h2>Investor Tip</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.tip}</TableCell>
              <TableCell align="center"><Link to={`/viewallcomments/${row.tip_id}`} style={{ textDecoration: 'none'}}><Button variant="contained" color="primary" style={{marginTop:"10px",marginLeft:10,width: "250px",
              height: "40px",color: '#FFFFFF',fontSize:'19px'}}><b>View Comments</b></Button></Link></TableCell>
              <TableCell align="center"><Button onClick={()=>{callGetAPI2(row.tip_id)}} variant="contained" color="primary" style={{marginTop:"10px",marginLeft:10,width: "70px",
              height: "70px",color: '#FFFFFF',fontSize:'19px'}}><b><div style={{marginTop:"11px"}}><ThumbUpAltIcon/></div>{row.total_likes}</b></Button></TableCell>
              <TableCell align="center"><Button onClick={()=>{callGetAPI3(row.tip_id)}} variant="contained" color="primary" style={{marginTop:"10px",marginLeft:10,width: "70px",
              height: "70px",color: '#FFFFFF',fontSize:'19px'}}><b><div style={{marginTop:"11px"}}><ThumbDownIcon/></div>{row.total_dislikes}</b></Button></TableCell>
              <TableCell align="center">
                <form onSubmit={(e)=> handleSubmit(e,row.tip_id)} noValidate>
                  <input
                  style={{marginTop:"30px",marginLeft:10,height: '30px',width: '330px',fontSize: '20px'}}
                  id="comment"
                  placeholder="Type Comment"
                  name="comment"
                  value={state.comment}
                  onChange={handleInputChange}
                  autoFocus
                  />
                  <Button type="submit" variant="contained" color="primary" style={{marginTop:"10px",marginLeft:10,width: "250px",
              height: "40px",color: '#FFFFFF',fontSize:'19px'}}><b>Post Comment</b></Button>
                </form>
              </TableCell>

            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    ))}
    </div>
  );
}
