import React from "react";
import { useConversations } from "./Contexts/ConversationsProvider";
import OpenConversation from "./OpenConversation";
import SideBar from "./SideBar";

export default function Dashboard({ id }) {
  const selectedConversations = useConversations();

  // style for the conversations box
  return (
    <div
      className="d-flex"
      style={{ height: "79vh", "margin-top": "5vh", "margin-bottom": "5vh" }}
    >
      <SideBar id={id} />
      {selectedConversations && <OpenConversation />}
    </div>
  );
}
