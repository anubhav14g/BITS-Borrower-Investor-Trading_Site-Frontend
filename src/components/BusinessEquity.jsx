import React from 'react';
import Navbar from "./Navbar.jsx";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

export default function Profile(){
    
    function logout(){
        localStorage.removeItem('bits-user-auth-token');
        localStorage.removeItem('bits-user-type');
    }

    return(
    <div>
        <Navbar/>
        <Link to="/createbusinessequityapplication" style={{ textDecoration: 'none'}}><Button variant="contained" color="primary" style={{marginTop:"10px",marginLeft:"20px",width: "300px",
        height: "50px",color: '#FFFFFF',fontSize:'19px'}}><b>Create Application</b></Button></Link>
        <Link to="/viewclosedapplications" style={{ textDecoration: 'none'}}><Button variant="contained" color="primary" style={{marginTop:"10px",marginLeft:"10px",width: "350px",
        height: "50px",color: '#FFFFFF',fontSize:'19px'}}><b>View Closed Applications</b></Button></Link>
        <Link to="/viewopenapplications" style={{ textDecoration: 'none'}}><Button variant="contained" color="primary" style={{marginTop:"10px",marginLeft:"10px",width: "350px",
        height: "50px",color: '#FFFFFF',fontSize:'19px'}}><b>View Open Applications</b></Button></Link>
        <Link to="/" style={{ textDecoration: 'none'}}><Button onClick={logout} variant="contained" color="primary" style={{marginTop:"-70px",marginLeft:"1150px",width: "170px",
  height: "50px",color: '#FFFFFF',fontSize:'19px'}}><b>Log Out</b></Button></Link>
        <h1 style={{color: 'blue'}} className="blink_me">Click on Buttons to display data or to view changes</h1>

    </div>
    );
}