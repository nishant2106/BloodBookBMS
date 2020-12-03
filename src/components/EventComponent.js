import React,{Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import 'react-toastify/dist/ReactToastify.css';

class Event extends Component{
    render(){
        return(
            <div>
                <h1>Upcoming Event & BloodDrives</h1>
                <FullCalendar
                    plugins={[ dayGridPlugin,interactionPlugin,listPlugin ]}
                    headerToolbar={{
                        left:'prev,next today',
                        center:'title',
                        right:'dayGridMonth,dayGridWeek'
                    }}
                    dateClick={this.handleDateClick}
                    events={"http://localhost:3001/camps/event"}
                />
            </div>
        )
    }
}
export default Event;