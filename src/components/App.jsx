import React from "react";
import Home from "./Home.jsx";
import SignupLogin from "./Signup-Login.jsx";
import BorrowerProfile from "./BorrowerProfile.jsx";
import InvestorProfile from "./InvestorProfile.jsx";
import BusinessEquity from "./BusinessEquity.jsx";
import ViewClosedApplications from "./ViewClosedApplications.jsx";
import ViewOpenApplications from "./ViewOpenApplications.jsx";
import ClosedDetailedView from "./ClosedDetailedView.jsx";
import OpenDetailedView from "./OpenDetailedView.jsx";
import CreateBusinessEquityApplication from "./CreateBusinessEquityApplication.jsx";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App(){
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/signuplogin" component={SignupLogin}/>
                    <Route path="/borrowerprofile" component={BorrowerProfile}/>
                    <Route path="/investorprofile" component={InvestorProfile}/>
                    <Route path="/businessequity" component={BusinessEquity}/>
                    <Route path="/viewclosedapplications" component={ViewClosedApplications}/>
                    <Route path="/viewopenapplications" component={ViewOpenApplications}/>
                    <Route path="/closeddetailedview/:application_id" component={ClosedDetailedView}/>
                    <Route path="/opendetailedview/:application_id" component={OpenDetailedView}/>
                    <Route path="/createbusinessequityapplication" component={CreateBusinessEquityApplication}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;