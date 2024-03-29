import React, { Component } from "react";
import RequestUserList from "./RequestUserList";

class RequestUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenId: 0,
      nid: "",
    };
  }

  getCurrentView() {
    return (
      <RequestUserList
        editCallBack={this.editCallBack}
        closeCallBack={this.closeCallBack}
      />
    );
  }
  /* getButtonIcon(){
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
*/
  editCallBack = (nid) => {
    if (this.state.isClicked) {
      this.setState((prevState, props) => {
        return { screenId: 2, nid: nid };
      });
    }
  };

  closeCallBack = () => {
    this.setState({ screenId: 0 });
  };

  render() {
    return (
      <div className="col-12">
        {this.getCurrentView()}
        {/* <Button className="btn btn-lg btn-danger"  */}
        {/* style={{bottom: '45px', right: '24px', borderRadius:'50%',padding:'1%', position: 'fixed'}} */}
        {/* onClick={ this.handleClick }> */}
        {/* <IconContext.Provider value={{ className: 'react-floating-button' }}> */}
        {/* {this.getButtonIcon()} */}
        {/* </IconContext.Provider> */}
        {/* </Button> */}
      </div>
    );
  }
}
export default RequestUser;
