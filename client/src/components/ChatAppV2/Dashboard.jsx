import React from "react";
import { useConversations } from "./Contexts/ConversationsProvider";
import OpenConversation from "./OpenConversation";
import SideBar from "./SideBar";

export default function Dashboard({ id }) {
  const selectedConversations = useConversations(id);

  return (
    <div
      className="d-flex"
      style={{ height: "70vh", "margin-top": "4vh", "margin-bottom": "1vh" }}
    >
      {id !== undefined && (
        <>
          <SideBar id={id} />
          {selectedConversations && <OpenConversation />}
        </>
      )}
    </div>
  );
}
