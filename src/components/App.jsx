import React from "react";
import Home from "./Home.jsx";
import SignupLogin from "./Signup-Login.jsx";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App(){
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/signuplogin" component={SignupLogin}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;