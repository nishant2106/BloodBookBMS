import React,{ Component } from "react";
import { Row,Label,Col,Button,Input ,Form} from "reactstrap";
import http from '../common'
import Notification,{ notify } from "react-notify-toast";




class CampsRegistration extends Component{
    constructor(props){
        super(props);
        this.state = {
            
            name       : '',
            mob       : '',
            address   : '',
            cdate    :  '',
            donationamt : ''
        }
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
        const newCamp={
        'name': this.state.name,
        'mobile': this.state.mob,
        'address': this.state.address,
        'cdate': this.state.cdate,
        'donationamt':this.state.donationamt
        }
        http.post('camps',{newCamp})
        .then(response=>{
            console.log(response)
            notify.show('Camp Added.','success',300)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render(){
        return(
            <div className="row row-content">
                <Notification/>
                <div className="col-12 offset-1">
                    <h3>Add a Campaign</h3>
                    <hr/>
                    <div className="col-12 col-md-9">
                    <Form>
                       <Row className="form-group">
                                    <Label htmlFor="fullname" md={2}>Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="fullname" name="fullname"
                                            placeholder="Name of campaign"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ name : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="mobnum" md={2}>Mobile No.</Label>
                                    <Col md={10}>
                                        <Input type="number" id="mobnum" name="mobnum"
                                            placeholder="Mobile Number"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ mob : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="cdate" md={2}>Campaign Date</Label>
                                    <Col md={10}>
                                        <Input type="date" rows="3" id="cdate" name="cdate"
                                            placeholder="Enter Date"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ cdate : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="location" md={2}>Location</Label>
                                    <Col md={10}>
                                        <Input  type="text" id="location" name="location"
                                            placeholder="Enter location"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ address : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="location" md={2}>Donation Amount</Label>
                                    <Col md={10}>
                                        <Input  type="number" id="donationamt" name="donationamt"
                                            placeholder="Enter amount"
                                            className="form-control"
                                            onChange={
                                                (e) => {
                                                    this.setState({ donationamt : e.target.value })
                                                }
                                            }
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button color="primary" onClick={(values) => this.handleSubmit(values)}>
                                        Add Camp
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        )
                                        }
                                    }

export default CampsRegistration;