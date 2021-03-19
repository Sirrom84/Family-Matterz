import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "./Contexts/ConversationsProvider";

export default function Conversations() {
  // import the conversation object from our hook
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations &&
        conversations !== null &&
        conversations.map((conversation, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => selectConversationIndex(index)}
            active={conversation.selected}
          >
            {conversation.recipients
              .map((recipient) => recipient.name)
              .join(", ")}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}
