import React, { Component } from 'react'
import { FormGroup, Form, Label, Input, Col, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import JumbotronComponent from './JumbotronComponent'
import http from '../shared/common'


class DonorLogin extends Component {
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
    console.log(this.state)
    const newDon={
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
    http.post('donors',{newDon})
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error)
      })
  };

  render() {
    return (
      <React.Fragment>
        <JumbotronComponent />
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Donor's Registration</BreadcrumbItem>
        </Breadcrumb>
        <div className="row row-content">

          <div className="col-6 offset-3">
            <Form className="form" >
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input type="text" name="name" id="name"
                  onChange={
                    (event) => {
                      this.setState({ name: event.target.value });
                    }
                  }
                  placeholder="Amy santiago" />
              </FormGroup>
              <FormGroup>
                <Label for="aadhar">Aadhar Number</Label>
                <Input type="text" name="aadhar" id="aadhar"
                  onChange={
                    (event) => {
                      this.setState({ aadhar: event.target.value });
                    }
                  }
                  placeholder="Aadhar Number" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail"
                  onChange={
                    (event) => {
                      this.setState({ email: event.target.value });
                    }
                  }
                  placeholder="abc@something.com" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Mobile Number</Label>
                <Input type="tel" name="mobile" id="exampleMobile"
                  onChange={
                    (event) => {
                      this.setState({ mobile: event.target.value });
                    }
                  } placeholder="123456789" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Blood group</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={
                  (event) => {
                    this.setState({ blood: event.target.value });
                  }
                }>
                  <option value="Select">-----Select-----</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>

                </Input>
              </FormGroup>
              <FormGroup tag="fieldset">
                <label>Plasma donor</label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="plasmaDonor" value="Yes" onChange={
                      (event) => {
                        this.setState({ plasma: event.target.value });
                      }
                    } />{' '}
                    YES                </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="plasmaDonor" value="No" onChange={
                      (event) => {
                        this.setState({ plasma: event.target.value });
                      }
                    } />{' '}
                    NO                </Label>
                </FormGroup>

              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Address</Label>
                <Input type="textarea" name="text" id="exampleText" onChange={
                  (event) => {
                    this.setState({ address: event.target.value });
                  }
                } />

              </FormGroup>


              <FormGroup>
                <Label for="exampleDistrict">District</Label>
                <Input type="select" name="select" id="exampleDistrict" onChange={
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
              </FormGroup>

              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">Pincode</Label>
                  <Input type="postal" name="zip" id="exampleZip" 
                  onChange={
                    (event) => {
                      this.setState({ pincode: event.target.value });
                    }
                  } />
                </FormGroup>
              </Col>

              <FormGroup tag="fieldset">
                <legend>Gender</legend>
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
                    Male                </Label>
                </FormGroup>
                <FormGroup check >
                  <Label check>
                    <Input type="radio" name="genderSelect" value="Other" onChange={
                      (event) => {
                        this.setState({ gender: event.target.value });
                      }
                    } />{' '}
                other                </Label>
                </FormGroup>
              </FormGroup>

              <br></br>
              <Button onClick={(event) => { this.createDonor(event) }}>Submit</Button>
            </Form>

          </div>

        </div>
      </React.Fragment>
    )
  }
}
export default DonorLogin;
