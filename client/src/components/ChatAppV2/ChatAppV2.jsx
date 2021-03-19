import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import { ContactsProvider } from "./Contexts/ContactsProvider";
import { ConversationsProvider } from "./Contexts/ConversationsProvider";
import { SocketProvider } from "./Contexts/SocketProvider";

export default function ChatAppV2() {
  const [id, setId] = useState(null);

  useEffect(() => {
    window.localStorage.setItem("aaron", JSON.stringify(id));
  }, [id]);

  const idInStorage = window.localStorage.getItem("aaron");
  console.log("id in ChatAppV2", typeof idInStorage);

  return (
    <>
      {idInStorage !== "null" ? (
        <SocketProvider id={id}>
          <ContactsProvider>
            <ConversationsProvider id={id}>
              <Dashboard id={id} />
            </ConversationsProvider>
          </ContactsProvider>
        </SocketProvider>
      ) : (
        <LoginPage onIdSubmit={setId} />
      )}
    </>
  );
}
