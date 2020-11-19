import React,{Component} from 'react'
import { FormGroup, Form, Label, Input,Col,Button,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from "react-router-dom";
import JumbotronComponent from './JumbotronComponent'


class DonorLogin extends Component{

    handleLogin(e) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        e.preventDefault();
    }
    
    
    render(){
        return(
          <React.Fragment>
            <JumbotronComponent/>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Donor's Registration</BreadcrumbItem>
          </Breadcrumb>
          <div className="row row-content">
               
               <div className="col-6 offset-3">
            <Form className="form" >
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Amy santiago" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="abc@something.com" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Mobile Number</Label>
              <Input type="tel" name="mobile" id="examplePassword" placeholder="123456789" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Blood group</Label>
              <Input type="select" name="select" id="exampleSelect">
              <option value="Select">-----Select-----</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="A1+">A1+</option>
                <option value="A1-">A1-</option>
                <option value="A1B+">A1B+</option>
                <option value="A1B-">A1B-</option>
                <option value="A2+">A2+</option>
                <option value="A2-">A2-</option>
                <option value="A2B+">A2B+</option>
                <option value="A2B-">A2B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="Bombay Blood Group">Bombay Blood Group</option>
                <option value="INRA">INRA</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>

              </Input>
            </FormGroup>
             <FormGroup tag="fieldset">
              <label>Plasma donor</label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}

YES                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                    NO                </Label>
              </FormGroup>
            
            </FormGroup>
           
            <FormGroup>
              <Label for="exampleText">Address</Label>
              <Input type="textarea" name="text" id="exampleText" />

            </FormGroup>


            <FormGroup>
              <Label for="exampleDistrict">District</Label>
              <Input type="select" name="select" id="exampleDistrict">
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
            <Input type="postal" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
          
            <FormGroup tag="fieldset">
              <legend>Gender</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}

                  Female
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                    Male                </Label>
              </FormGroup>
              <FormGroup check >
                <Label check>
                  <Input type="radio" name="radio1"  />{' '}
                other                </Label>
              </FormGroup>
            </FormGroup>
            <br></br>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
Agree to the terms*              </Label>
            </FormGroup>

            <br></br>
            <Button>Submit</Button>
          </Form>

          </div>
   
          </div>
          </React.Fragment>
        )    
    }
}
export default DonorLogin;
