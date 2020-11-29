import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Button,Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input
} from 'reactstrap';
import http from '.././shared/common'

class DashBoard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            title:'',
            date:'',
            color:''
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleDateClick = this.handleDateClick.bind(this);
    }
    handleLogin(event) {
        this.toggleModal();
        if(this.state.title){
            http.post('event',{
                'title': this.state.title,
                'date':this.state.date,
                'color':this.state.color
            })
            .then(response=>{console.log(response)})
            .catch(error=>{
                console.log(error)
            })
        }   
        event.preventDefault();

    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleDateClick = (arg) => { // bind with an arrow function
        this.toggleModal();
        console.log(arg.dateStr)
        this.setState({date:arg.dateStr})
    }
    render(){
        return(
            <div>
                <FullCalendar
                    plugins={[ dayGridPlugin,interactionPlugin,listPlugin ]}
                    headerToolbar={{
                        left:'prev,next today',
                        center:'title',
                        right:'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                    }}
                    dateClick={this.handleDateClick}
                    events={"http://localhost:3001/event"}
                />
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Create New Event</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="title">Event Name</Label>
                                <Input type="text" id="title" name="title"
                                    onChange={(e)=>{
                                        this.setState({title:e.target.value})
                                    }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="color">Choose Color</Label>
                                <Input type="color" id="color" name="color"
                                    onChange={(e)=>{
                                        this.setState({color:e.target.value})
                                    }} />
                            </FormGroup>
                            <Button color="primary" onClick={ (event) =>{
                                    this.handleLogin(event)
                                }}>Add Event</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default DashBoard;