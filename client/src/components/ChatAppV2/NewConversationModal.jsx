import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "./Contexts/ContactsProvider";
import { useConversations } from "./Contexts/ConversationsProvider";

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  // bring in our contacts
  const { contacts } = useContacts();

  const { createConversation } = useConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    createConversation(selectedContactIds);
    closeModal();
  };

  // handle checkbox id gets our contact id
  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds((prevSelectedContactIds) => {
      // is this a contact id present  remove from the list
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  };

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit" style={{ "background-color": "#56ca85" }}>
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
