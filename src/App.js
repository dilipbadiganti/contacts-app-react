import React, { useState } from 'react';
import "./App.css";

import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList'; 

function App() {


  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Andrea",
  //     email: "andrea91@mailme.in"
  //   },
  //   {
  //     id: "2",
  //     name: "John",
  //     email: "john.doe@example.com"
  //   }
  // ]

  // using the useState to dynamically render the contacts..

  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact);
  }


  return (

    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/> 
      <ContactList contacts={contacts}/>
    </div>

  );
}

export default App;
