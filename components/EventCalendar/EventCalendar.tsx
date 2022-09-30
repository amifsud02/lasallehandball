import React from "react";

import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-glass.css";

export type EventTypes = {
    id: number;
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
        eventsData: [
          {
            id: 1,
            name: "French class",
            start: "2022-08-17T06:00:00",
            end: "2022-08-18T20:30:00"
          },
          {
            id: 2,
            name: "Blockchain 101",
            start: "2022-08-20T10:00:00",
            end: "2022-08-20T11:30:00"
          }
        ],

        dateChanged: (currentDate: Date, events: EventTypes) => {
          //console.log("date change", currentDate, events);
        },

        monthChanged: (currentDate: Date, events: EventTypes) => {
          //console.log("month change", currentDate, events);
        },
      });

      console.log(calender.getSelectedDate());
      console.log(calender.getEventsData());
  }

  
  render() {
    return (
      <div id="myCal"></div>
    );
  }
}

export default EventCalendar;