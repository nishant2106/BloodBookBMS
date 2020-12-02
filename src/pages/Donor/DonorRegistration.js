import React, { Component } from "react";
import { Row, Label, Col, Button, Input, Form, FormGroup } from "reactstrap";
import http from '../common'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DonorRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aadhar: '',
            name: '',
            email: '',
            mobile: '',
            gender: '',
            blood: '',
            plasma: '',
            address: '',
            district: '',
            pincode: ''
        }
    }
    createDonor(e) {
        e.preventDefault()
        const newDon = {
            'aadhar': this.state.aadhar,
            'name': this.state.name,
            'email': this.state.email,
            'mobile': this.state.mobile,
            'gender': this.state.gender,
            'blood': this.state.blood,
            'plasma': this.state.plasma,
            'address': this.state.address,
            'district': this.state.district,
            'pincode': this.state.pincode
        }
        http.post('donors', { newDon })
            .then(response => {
                if(response.status===200){
                    toast.success('Donor Registration Successfull')
                    this.props.closeCallBack();
                }else{
                    toast.error('Registration Failed')
                }  
            })
            .catch(error => {
                console.log(error)
                toast.error('Donor registraton failed.')
            })
    };
    render() {
        return (
            <div className="container">
            <div className="row row-content">
            <ToastContainer position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
                    <div className="col-12 offset-1">
                        <h3>Donor Registration</h3>
                        <hr />
                    <div className="col-12 col-md-9">
                        <Form>
                        <Row className="form-group">
                                <Label htmlFor="aadhar" md={2}>Aadhar Number</Label>
                                <Col md={10}>
                                <Input type="text" name="aadhar" id="aadhar"
                                    onChange={
                                        (event) => {
                                            this.setState({ aadhar: event.target.value });
                                        }
                                    }
                                    placeholder="Aadhar Number" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="Name" md={2}>Name</Label>
                                <Col md={10}>
                                <Input type="text" name="name" id="name"
                                    onChange={
                                        (event) => {
                                            this.setState({ name: event.target.value });
                                        }
                                    }
                                    placeholder="Amy santiago" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="exampleEmail" md={2}>Email</Label>
                                <Col md={10}>
                                <Input type="email" name="email" id="exampleEmail"
                                    onChange={
                                        (event) => {
                                            this.setState({ email: event.target.value });
                                        }
                                    }
                                    placeholder="abc@something.com" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="exampleMobile" md={2}>Mobile Number</Label>
                                <Col md={10}>
                                <Input type="tel" name="mobile" id="exampleMobile"
                                    onChange={
                                        (event) => {
                                            this.setState({ mobile: event.target.value });
                                        }
                                    } placeholder="123456789" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="exampleSelect" md={2}>Blood group</Label>
                                <Col md={10}>
                                <Input type="select" name="select" id="exampleSelect" onChange={
                                    (event) => {
                                        this.setState({ blood: event.target.value });
                                    }
                                }>
                                    <option value="Select">-----Select-----</option>
                                    <option value="A_pos">A+</option>
                                    <option value="A_neg">A-</option>
                                    <option value="B_pos">B+</option>
                                    <option value="B_neg">B-</option>
                                    <option value="AB_pos">AB+</option>
                                    <option value="AB_neg">AB-</option>
                                    <option value="O_pos">O+</option>
                                    <option value="O_neg">O-</option>

                                </Input>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="plasmaSelect" md={2}> Plasma Donor</Label>
                                <Col md={10}>
                                    <FormGroup check>
                                        <Label check>        
                                        <Input type="radio" name="plasmaDonor" value="Yes" onChange={
                                            (event) => {
                                                this.setState({ plasma: event.target.value });
                                            }
                                            } />{' '} YES</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio" name="plasmaDonor" value="No" onChange={
                                            (event) => {
                                                this.setState({ plasma: event.target.value });
                                            }
                                        } />{' '}
                                        NO</Label>
                                    </FormGroup>
                                </Col>
                                </Row>
                            <Row className="form-group">
                                <Label htmlFor="exampleText" md={2}>Address</Label>
                                <Col md={10}>
                                <Input type="textarea" name="text" id="exampleText" onChange={
                                    (event) => {
                                        this.setState({ address: event.target.value });
                                    }
                                } />
                                </Col>
                                </Row>

                                <Row className="form-group">                                
                                <Label htmlFor="exampleDistrict" md={2}>District</Label>
                                <Col md={10}>
                                <Input type="select" name="exampleDistrict" id="exampleDistrict" onChange={
                                    (event) => {
                                        this.setState({ district: event.target.value });
                                    }
                                }>
                                    <option value="Select">-----Select-----</option>
                                    <option value="Ahmednagar">    Ahmednagar </option>
                                    <option value="Akola">Akola</option>
                                    <option value="Amravati">Amravati</option>
                                    <option value=" Aurangabad"> Aurangabad</option>
                                    <option value=" Beed"> Beed</option>
                                    <option value="  Bhandara">  Bhandara</option>
                                    <option value="Buldhana">Buldhana</option>
                                    <option value="Chandrapur">Chandrapur</option>
                                    <option value="Dhule">Dhule</option>
                                    <option value="Gadchiroli">Gadchiroli</option>
                                    <option value="Gondia">Gondia</option>
                                    <option value="Hingoli">Hingoli</option>

                                    <option value="Jalgaon">Jalgaon</option>
                                    <option value="Jalna">Jalna</option>
                                    <option value="Kolhapur">Kolhapur</option>
                                    <option value="Latur">Latur</option>
                                    <option value="Mumbai City">Mumbai City</option>
                                    <option value=" Mumbai Suburban"> Mumbai Suburban</option>
                                    <option value=" Nagpur"> Nagpur</option>
                                    <option value="Nanded">Nanded</option>
                                    <option value="Kolhapur">Kolhapur</option>
                                    <option value="Nandurbar">Nandurbar</option>
                                    <option value="Nashik">Nashik</option>
                                    <option value="Palghar">Palghar</option>
                                    <option value="Parbhani">Parbhani</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Raigad">Raigad</option>
                                    <option value="Jalna">Jalna</option>
                                    <option value="Kolhapur">Kolhapur</option>
                                    <option value="Ratnagiri">Ratnagiri</option>
                                    <option value="Sangli">Sangli</option>
                                    <option value=" Satara"> Satara</option>
                                    <option value="Sindhudurg">Sindhudurg</option>
                                    <option value="Solapur">Solapur</option>
                                    <option value="Thane">Thane</option>
                                    <option value="Wardha">Wardha</option>
                                    <option value="Washim">Washim</option>
                                    <option value="Yavatmal"> Yavatmal</option>

                                </Input>
                            </Col>
                            </Row>
                            <Row className="form-group">
                                    <Label htmlFor="exampleZip" md={2}>Pincode</Label>
                                    <Col md={10}>
                                    <Input type="postal" name="exampleZip" id="exampleZip"
                                        onChange={
                                            (event) => {
                                                this.setState({ pincode: event.target.value });
                                            }
                                        } />
                                    </Col>
                                    </Row>
                            <Row className="form-group">
                                <Label htmlFor="genderSelect" md={2}>Gender</Label>
                                <Col md={10}>
                                    <FormGroup check>
                                        <Label check>
                                        <Input type="radio" name="genderSelect" value="Female" onChange={
                                            (event) => {
                                                this.setState({ gender: event.target.value });
                                            }
                                        } />{' '}
                                        Female
                                        </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="genderSelect" value="Male" onChange={
                                            (event) => {
                                                this.setState({ gender: event.target.value });
                                            }
                                        } />{' '}
                                        Male</Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="genderSelect" value="Other" onChange={
                                            (event) => {
                                                this.setState({ gender: event.target.value });
                                            }
                                        } />{' '}
                                        other</Label>
                                </FormGroup>
                                </Col>
                                </Row>
                            <br></br>
                            <Button onClick={(event) => { this.createDonor(event) }}>Add Donor</Button>
                        </Form>

                    </div>

                </div>
                </div>
                </div>
        )
    }
}
export default DonorRegistration;