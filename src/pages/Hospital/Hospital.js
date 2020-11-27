import React,{Component} from 'react'
import { Button } from 'reactstrap';
import { FaPlus,FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons";
import HospitalRegistration from "./HospitalRegistration";
import HospitalEdit from "./HospitalEdit";
import HospitalList from "./HospitalList";

class Hospital extends Component{
    constructor(props){
        super(props);
        this.state = {
            screenId : 0,
            nid : ''
        }
    }
    getCurrentView(){
        if(this.state.screenId === 1)
            return <HospitalRegistration closeCallBack={ this.closeCallBack }/>;
        else if(this.state.screenId === 2)
            return <HospitalEdit nid={this.state.nid} closeCallBack={ this.closeCallBack } />

        return <HospitalList editCallBack={ this.editCallBack } closeCallBack={ this.closeCallBack } />;
    }
    getButtonIcon(){
        if(this.state.screenId === 1 || this.state.screenId === 2)
                    return <FaTimes/>;
        else return <FaPlus/>;
    }

    handleClick = () => {
        let sid = this.state.screenId === 0 ? 1 : 0 ;
        this.setState((prevState, props) => {
          return { screenId: sid }     
        });
      }
    render(){
        return(
            <div className="col-12">
                { this.getCurrentView() }
                <Button className="btn btn-lg btn-danger" 
                style={{bottom: '45px', right: '24px', borderRadius:'50%',padding:'1%', position: 'fixed'}}
                onClick={ this.handleClick }>
                    <IconContext.Provider value={{ className: 'react-floating-button' }}>
                        {this.getButtonIcon()}
                    </IconContext.Provider>
                </Button>
            </div>
        )
    }
}
export default Hospital;