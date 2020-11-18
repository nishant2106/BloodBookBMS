import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import Event from './EventComponent'
import DonorLogin from './DonorLoginComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import Footer from './FooterComponent'
import EmployeeMain from '../pages/EmployeeMain';
import Announcement from '../pages/Announcement/Announcement';
import Donor from '../pages/Donor/Donor';
import Camps from '../pages/Camps/Camps';
import Donation from '../pages/Donation/Donation';
import Hospital from '../pages/Hospital/Hospital';
import Nurse from '../pages/Nurse/Nurse';
import Setting from '../pages/Settings/Setting';
import Transfer from '../pages/Transfer/Transfer';
import DashBoard from '../pages/Dashboard';
import Storage from "../pages/Storage/Storage";
import RequestUser from "../pages/RequestUser/RequestUser";
import NavBarComponent from "../pages/SideNav";

class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/events" component={Event}/>
                    <Route exact path="/donorreg" component={()=><DonorLogin/>}/>
                    <Route exact path="/contactus" component={()=><Contact/>}/>
                    <Route exact path="/aboutus" component={()=><About/>}/>
                    
                    <EmployeeMain>
                    <Route component={({ match }) =>
                        <div>
                            <Route path="/announcements" component={Announcement}/>
                            <Route exact path="/donors" component={Donor}/>
                            <Route exact path="/donation" component={Donation}/>
                            <Route exact path="/camps" component={Camps}/>
                            <Route exact path="/hospital" component={Hospital}/>
                            <Route exact path="/nurse" component={Nurse}/>
                            <Route exact path="/request" component={RequestUser}/>
                            <Route exact path="/setting" component={Setting}/>
                            <Route exact path="/storage" component={Storage}/>
                            <Route exact path="/transfer" component={Transfer}/>
                            <Route exact path="/dashboard" component={DashBoard}/>
                        </div>
                    }/>
                    </EmployeeMain>
                    {/* <Redirect to="/home" /> */}
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Main);