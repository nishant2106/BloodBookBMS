import React,{ Component } from "react";
import { Table } from "reactstrap";

class NurseList extends Component{
    render(){
        return(
            <div>
                <Table className="highlight">
                    <thead>
                        <tr>
                            <th data-field="NID">NurseID</th>
                            <th data-field="name">Name</th>
                            <th data-field="gender">Gender</th>
                            <th data-field="location">Location</th>
                            <th data-field="phone">Phone</th>
                            <th data-field="Email">Email</th>
                            <th data-field="date">Join Date</th>
                        </tr>
                    </thead>
                </Table>
            </div>
        )
    }
}

export default NurseList;