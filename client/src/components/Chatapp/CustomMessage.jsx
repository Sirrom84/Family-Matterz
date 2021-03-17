import React, { useContext } from "react";
import { Avatar, ChatContext, usePinHandler } from "stream-chat-react";

export const CustomMessage = (props) => {
  const {
    addNotification,
    getPinMessageErrorNotification,
    message,
    pinPermissions,
  } = props;

  const { client } = useContext(ChatContext);

  const { handlePin } = usePinHandler(message, pinPermissions, {
    notify: addNotification,
    getErrorNotification: getPinMessageErrorNotification,
  });

  const { image } = client.user;

  return (
    <div className={message.pinned ? "pinned" : ""} onClick={handlePin}>
      <Avatar image={image} />
      <p>{message.text}</p>
    </div>
  );
};
