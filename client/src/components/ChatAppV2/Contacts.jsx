import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContacts } from "./Contexts/ContactsProvider";
import "./ChatApp.scss";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <ListGroup variant="flush ">
      {contacts.map((contact) => (
        <ListGroup.Item id="contact-style" key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
