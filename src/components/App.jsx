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
import ViewBusinessEquityApplications from "./ViewBusinessEquityApplications.jsx";
import InvestorOpenDetailedView from "./InvestorOpenDetailedView.jsx";
import InvestorTip from "./InvestorTip.jsx";
import ViewAllComments from "./ViewAllComments.jsx";
import CreateInvestorTip from "./CreateInvestorTip.jsx";
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
                    <Route path="/viewbusinessequityapplications" component={ViewBusinessEquityApplications}/>
                    <Route path="/investoropendetailedview/:application_id" component={InvestorOpenDetailedView}/>
                    <Route path="/investortip" component={InvestorTip}/>
                    <Route path="/viewallcomments/:tip_id" component={ViewAllComments}/>
                    <Route path="/createinvestortip" component={CreateInvestorTip}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;