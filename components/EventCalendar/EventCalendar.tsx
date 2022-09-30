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
          const a = document.querySelector('#__next');
          const eventDiv = a.querySelector(".events");

          let events__html = '';

          console.log(currentDate, events);

          events.forEach(event => {
            events__html += `
              <div class="event__entry">
                <p>${event.name}</p>
              </div> `
          })

          // if(events__html)
          // {
          //   eventDiv.innerHTML = events__html;
          // }
          // else 
          // {
          //   eventDiv.innerHTML = '<div class="no-events-text">No events on this day :(</div>';
          // }
        },

        monthChanged: (currentDate: Date, events: EventTypes) => {
          //console.log("month change", currentDate, events);
        },
      });

      // fetch('/api/events').then(res => res.json()).then(data => {
      //   let events__res = data
      //   calender.setEventsData(events__res);
      // });
      
  }

  render() {
    return (
      <div id="myCal"></div>
    );
  }
}

export default EventCalendar;