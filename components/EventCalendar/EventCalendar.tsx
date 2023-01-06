import React, { useEffect, useRef } from "react";

import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-glass.css";

export type EventTypes = {
    Subject: string;
    StartTime: string;
    EndTime: string;
    StartDate: string;
    EndDate: string;
    name: string;
    start: Date;
    end: Date;
}



class EventCalendar extends React.Component {

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
            let events__html = "";

            //console.log(currentDate, events);

            events.forEach(event => {
                events__html += `
                <div class="event__details">
                    <p>${event.name}</p>
                </div> `
            
            });

            if(events__html == ""){
                events__html = `<p class="no__events">No scheduled events</p>`
                document.querySelector('.events__container')!.innerHTML = events__html;
            }
            else{
                document.querySelector('.events__container')!.innerHTML = events__html;
            }
        },
      });

      fetch('/api/events').then(res => res.json()).then(data => {
        let events__res = data
        calender.setEventsData(events__res);
        console.log(calender.getEventsData());
      });
  }

  render() {
    return (
      <div id="myCal"></div>
    );
  }
}

export default EventCalendar;
