"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import React, { useState } from "react";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomEvent from "./CustomEvent";

const localizer = momentLocalizer(moment);

const SchedulePage = () => {
  const [view, setView] = useState<View>(Views.DAY);
  const [date, setDate] = useState(new Date());  // Track the current date shown

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <div className="ml-72 mr-4 mt-4">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        date={date}                // Control the date shown
        onView={handleOnChangeView}
        onNavigate={handleNavigate} 
        min={new Date(2025, 1, 0, 8, 0, 0)}
        max={new Date(2025, 1, 0, 17, 0, 0)}
        style={{ height: "98%" }}
        components={{
           event:CustomEvent
        }}
      />
    </div>
  );
};

export default SchedulePage;
