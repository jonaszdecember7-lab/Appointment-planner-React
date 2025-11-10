import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contact, setContact] = useState([]);
  const [appointment, setAppointment] = useState([]);
  function addContact(name, phoneNumber, email) {
    const newContact={name, phoneNumber, email}
    setContact((prev) => [...prev, newContact])
  }
  function addAppointment(name, contact, date, time) {
  const newAppointment = { name, contact, date, time }; 
  setAppointment((prev) => [...prev, newAppointment]);
}



  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage addContact={addContact} contacts={contact}/>  }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage addAppointment={addAppointment} appointments={appointment}  contacts={contact} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
