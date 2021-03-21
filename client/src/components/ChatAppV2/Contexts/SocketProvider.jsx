import React, { useContext, useEffect, useState } from "react";
// import io from "socket.io-client";
const io = require("socket.io-client");
const socket = io("ws://localhost:8000", {
  query: "strings ",
  // setSocket(newSocket);
});

// socket.emit("send-message");
socket.on("Hey you");
const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState();

  // connects to the server
  useEffect(() => {
    const newSocket = io("ws://localhost:8000", { query: { id } });
    setSocket(newSocket);

    //close the socket to prevent duplicates
    // return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
