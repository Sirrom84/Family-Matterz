import React from "react";
import { useConversations } from "./Contexts/ConversationsProvider";
import OpenConversation from "./OpenConversation";
import SideBar from "./SideBar";

export default function Dashboard({ id }) {
  const selectedConversations = useConversations();

  return (
    <div
      className="d-flex"
      style={{ height: "70vh", "margin-top": "4vh", "margin-bottom": "1vh" }}
    >
      <SideBar id={id} />
      {selectedConversations && <OpenConversation />}
    </div>
  );
}
