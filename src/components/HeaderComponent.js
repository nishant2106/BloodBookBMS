import React,{Component} from 'react'
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button,
    Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input
} from 'reactstrap';
import Auth from '../auth';
import { NavLink } from 'react-router-dom';
import Notifications, {notify} from 'react-notify-toast';
import {browserHistory} from 'react-router'

let auth = new Auth();
class Header extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        this.toggleModal();
        if( this.username.value.length > 4 && this.password.value.length > 2 ){
            auth.setUser(1);
            notify.show("Welcome "+this.username.value, "success", 1000);
            alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
            browserHistory.push("/dashboard")
        }else{
            notify.show("Invalid Email or Password", "error", 1000);
        }
        event.preventDefault();

    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <Notifications />
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'>
                                        <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/donorreg'>
                                        <span className="fa fa-user-plus fa-lg"></span> Donor's Registration
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/events">
                                        <span className="fa fa-calendar fa-lg"></span> Events
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'>
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button className="btn btn-light" outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>BloodBook Blood Bank</h1>
                                <p>We take inspiration from the World's best health services,
                                and create a great environment.
                                “A single pint can save three lives, a single gesture can create a million smiles”</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                            Remember me
                        </Label>
                            </FormGroup>
                            <Button color="primary" onClick={ (event) =>{
                                    this.handleLogin(event)
                                }}>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;