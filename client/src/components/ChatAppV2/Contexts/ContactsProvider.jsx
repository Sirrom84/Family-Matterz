import React, { useContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const ContactsContext = React.createContext();

// this will allow me to export our contacts
export function useContacts() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ children }) {
  // use local storage hook  to hold my state while in the app
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  // create contact and add it to the end of my state object
  const createContact = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}
