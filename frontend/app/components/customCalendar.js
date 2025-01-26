"use client";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styles from "../styles/CustomCalendar.module.css";

const CustomCalendar = () => {
  const [date, setDate] = useState(null);
  
  useEffect(() => {
    setDate(new Date());
  }, []);

  if (!date) return null;

  return (
    <div className={styles.calendarContainer}>

      <header className={styles.header}>
        <h2>Calendar</h2>
        <button className={styles.iconButton}>
          <img src="/calendar.svg" alt="Calendar Icon" />
        </button>
      </header>

      <div className={styles.controls}>
        <button className={styles.dateButton}>
          <span>{date.toLocaleString("default", { day:"numeric", month: "short", year: "numeric" })}</span>
        </button>
        <a href="#" className={styles.viewLink}>
          View
        </a>
      </div>

      <Calendar
        onChange={setDate}
        value={date}
        className={styles.customCalendar}
      />
    </div>
  );
};

export default CustomCalendar;
