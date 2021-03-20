import React, { useContext, useState, useEffect, useCallback } from "react";
// import conversations from "../Conversations";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";
import { useSocket } from "./SocketProvider";

// create context is a way to pass data through the component tree with out having to pass props
const ConversationsContext = React.createContext();

export function useConversations() {
  // console.log("this is conversations context ", ConversationsContext);
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ id, children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  // select our conversation
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

  // import the contacts
  const { contacts } = useContacts();
  const socket = useSocket();

  const createConversation = (recipients) => {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  };

  // lets add a message to the conversation
  const addMessageToConversation = useCallback(
    // whos it going to , what did they send and who sent it
    ({ recipients, text, sender }) => {
      setConversations((prevConversations) => {
        let madeChange = false;
        const newMessage = { sender, text };

        const newConversations = prevConversations.map((conversation) => {
          //compare two arrays  to see if they have the same conversations
          if (arrayEquality(conversation.recipients, recipients)) {
            madeChange = true;
            //
            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            };
          }

          return conversation;
        });
        // make a new conversation
        if (madeChange) {
          return newConversations;
        } else {
          return [...prevConversations, { recipients, messages: [newMessage] }];
        }
      });
    },
    [setConversations]
  );

  // pick up incoming messages on a valid socket
  useEffect(() => {
    if (socket == null) return;
    socket.on("receive-message", addMessageToConversation);
    // turn off event listener
    return () => socket.off("receive-message");
  }, [socket, addMessageToConversation]);

  function sendMessage(recipients, text) {
    socket.emit("send-message", { recipients, text });
    addMessageToConversation({ recipients, text, sender: id });
  }

  // to format the conversations to be attached to there names  for a single conversation
  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = (contact && contact.name) || recipient;
      // our new contact objected
      return { id: recipient, name };
    });

    //who sent the message
    const messages = conversation.messages.map((message) => {
      const contact = contacts.find((contact) => {
        return contact.id === message.sender;
      });
      // assign the contact id and contact name or the message sender
      const name = (contact && contact.name) || message.sender;
      // did i send the message
      const fromMe = id === message.sender;
      return { ...message, senderName: name, fromMe };
    });

    const selected = index === selectedConversationIndex;
    return { ...conversation, messages, recipients, selected };
  });

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}

// this will be used to compare our messages array to see if we have an existing conversation
// that matches if
const arrayEquality = (a, b) => {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  return a.every((element, index) => {
    return element === b[index];
  });
};
