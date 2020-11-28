import React,{ Component } from "react";
import { Table } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CampsList extends Component{
    constructor(props){
        super(props)
        this.state={
            Camp:[],
            isLoaded:false
        }
    }
    async componentDidMount(){
        const url="http://localhost:3001/Camps"
        const response = await fetch(url)
        const data = await response.json()
        if(data.length>0){
            this.setState({Camp:data})
            this.setState({isLoaded:true})
            toast.success('Data is Fetched SuccessFully.')
        }
        else
            toast.error('No Data to Display')
    }

    showList(){
        let data = this.state.Camp
        let rows=[]
        console.log(data)
        if(this.state.isLoaded){
            for (let index = 0; index < data.length; index++) {
                let date = new Date(data[index].c_date)
                rows.push(
                    <tr>
                        <td>{data[index].camp_id}</td>
                        <td>{data[index].name}</td>
                        <td>{data[index].location}</td>
                        <td>{data[index].mob_no}</td>
                        <td>{data[index].createdon}</td>
                        <td>{date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}</td>
                    </tr>
                ) 
            }
            return rows
        }
    }
    render(){
        return(
            <div>
                <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover/>
                <Table className="highlight">
                    
                    <thead>
                        <tr>
                            <th data-field="CID">Camp_ID</th>
                            <th data-field="name">Name</th>
                            <th data-field="location">Location</th>
                            <th data-field="phone">Phone</th>
                           <th data-field="donation_amt">Donation_amount</th>
                            <th data-field="date">Camp Date</th>
                        </tr>
                    </thead>
                    <tbody>{this.showList()}</tbody>
                </Table>
            </div>
        )
    }
}

export default CampsList;