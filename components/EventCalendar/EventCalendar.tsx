import React, { useEffect, useRef, useState } from "react";

import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-glass.css";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export type EventTypes = {
    id: string;
    Subject: string;
    StartTime: string;
    EndTime: string;
    StartDate: string;
    EndDate: string;
    name: string;
    start: Date;
    end: Date;
}

interface State {
  isOpen: string | null;
  selectedEvent: EventTypes[] | null;
}

class EventCalendar extends React.Component<{}, State> {

  state: State = {
    isOpen: null,
    selectedEvent: null
  };

  componentDidMount(): void { 
    
    const calender = new Calendar({
        id: "#myCal",
        theme: "glass",
        primaryColor: "var(--accent-color)",
        headerBackgroundColor: "var(--accent-color)",
        weekdayType: "long-upper",
        monthDisplayType: "long",
        calendarSize: "small",
        layoutModifiers: ["month-left-align"],
        borderRadius: "0px",

        dateChanged: (currentDate: Date, events: EventTypes[]) => {

          // check if there is something in events or not
          if (events.length !== 0) {
            this.setState({
              selectedEvent: events
            })
          }
          else {
            this.setState({
              selectedEvent: null
            })
          }
        },
      });

      fetch('/api/fixtures').then(res => res.json()).then(data => {
        let events__res = data
        calender.setEventsData(events__res);
        console.log("Calender Events Data:", calender.getEventsData());
      });
  }

  handleAccordionClick = (index: string) => {
      if(this.state.isOpen === index)
      {
          this.setState({ isOpen: null})
      } else {
        this.setState({
          isOpen: index
        })
      }
    }
  

  render() {
    return (
      <>
        <div id="myCal"></div>

        <div className="events__container">
          {this.state.selectedEvent === null ? (
              <>
                <p className="no__events">No scheduled events</p>
              </>
            )
            :
            this.state.selectedEvent.map((event) => (
              <div key={event.id} className="accordian">
                <div className="accordian__title event__details" onClick={() => this.handleAccordionClick(event.id)}>
                  {event.name}
                  <i className={`chevron-arrow ${this.state.isOpen === event.id ? 'open' : ''}`}></i>
                
                </div>
                
                  <div className={`accordian__content ${this.state.isOpen === event.id ? 'open' : ''}`}>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            Kick Off
                          </td>
                          <td>
                            {event.start.toString()}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Competition
                          </td>
                          <td>
                            {event.start.toString()}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Location
                          </td>
                          <td>
                            {event.start.toString()}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    
                  </div>
                
              </div>
            ))
          }
        </div>
      </>
    );
  }
}

export default EventCalendar;