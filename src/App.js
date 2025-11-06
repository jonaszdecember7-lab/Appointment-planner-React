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
  function addAppointment(name, phoneNumber, email) {
    const newAppointment={name, phoneNumber, email}
    setAppointment((prev) => [...prev, newAppointment])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage addContacts={addContact} contacts={contact}/>  }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage addAppointment={addAppointment} appointments={appointment}/> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
