import React from "react";

import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-glass.css";

import { Competitions } from "../../lib/interfaces";

export type EventTypes = {
    id: string;    
    location: string;
    name: string;
    start: Date;
    end: Date;   
    categoryName: string;
    competition: Competitions;
    formattedDate: Date;
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
            this.state.selectedEvent.map((event: EventTypes) => (
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
                            <strong>Kick Off</strong>
                          </td>
                          <td>
                            {event.formattedDate.toString()}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Competition</strong>
                          </td>
                          <td>
                            {`${event.competition.competitionTypes} - ${event.competition.category.toString()}`}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Location</strong>
                          </td>
                          <td>
                            {event.location}
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