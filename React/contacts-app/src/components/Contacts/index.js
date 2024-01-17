import React, { useEffect, useState } from 'react'

import {} from './styles.css'

import List from './List';
import Form from './Form';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mesut",
      phone_number : "4132132"      
    },
    {
      fullname: "Mehmet",
      phone_number:"12341234"
    },
    {
      fullname:"Veli",
      phone_number: "98564754"
    }
  ]);

  useEffect(()=> {
      console.log(contacts);
  },[contacts])

  return (
    <div id = "container">
      <h2>Contacts</h2>
      <List contacts = {contacts} />
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;