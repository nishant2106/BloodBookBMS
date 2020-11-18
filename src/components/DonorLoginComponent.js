
import React,{Component} from 'react'
import { FormGroup, Form, Label, Input,Col, Row,Button} from 'reactstrap';


class DonorLogin extends Component{

    handleLogin(e) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        e.preventDefault();
    }
    
    
    render(){
        return(
          
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


            <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Pincode</Label>
            <Input type="postal" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
          
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
                Check me out
              </Label>
            </FormGroup>

            <br></br>
            <Button>Submit</Button>
          </Form>

          </div>
   
          </div>
        )    
    }
}
export default DonorLogin;
