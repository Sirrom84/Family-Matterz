import { Width } from "devextreme-react/chart";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "./Contexts/ConversationsProvider";

export default function Conversations() {
  // import the conversation object from our hook
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          id="active"
          style={{
            "background-color": "#56ca85",
            "margin-top": "8px",
            // position: "fixed",
            top: "20px",
            padding: "5px 15px 0px",
          }}
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
