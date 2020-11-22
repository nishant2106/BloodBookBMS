import React,{ Component } from "react";
import { Row,Input } from "reactstrap";

const hstyle = {
    'display' : 'none'
}

const vstyle = {
    'display' : 'block'
}

class NurseRegistration extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNurse    : false,
            email       : '',
            fname       : '',
            lname       : '',
            phone       : '',
            location    : '',
            gender      : 'M'
        }
    }
    render(){
        return(
            <div>
                <h1>Nurse Regisstration</h1>
            </div>
        )
    }
}

export default NurseRegistration;