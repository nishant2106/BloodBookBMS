import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import Event from './EventComponent'
import DonorLogin from './DonorLoginComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import Footer from './FooterComponent'

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
                    {/* <Redirect to="/home" /> */}
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Main);