import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name,
  setName,
  contacts,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit} >
      <label>Enter your Name:
        <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required/>
      </label>

      <ContactPicker
      contacts={contacts}
      value={contact}
      onChange={(e) => setContact(e.target.value)}/>

      <label>Pick a date:
        <input 
        type="date" 
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
        required/>
      </label>

      <label>Choose a time:
        <input 
        type="time" 
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required/>
      </label>

        <input type="submit"></input>
    </form>
  );
};
