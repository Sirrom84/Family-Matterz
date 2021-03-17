import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("etwupmse7csk");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGF0ZS1mbG93ZXItNCJ9.snIP5y-Xn-6cZTHsSrDBmEnEl4RJ3iS45WC2696usn8";

chatClient.connectUser(
  {
    id: "late-flower-4",
    name: "late-flower-4",
    image:
      "https://getstream.io/random_png/?id=late-flower-4&name=late-flower-4",
  },
  userToken
);

const channel = chatClient.channel("messaging", "late-flower-4", {
  // add as many custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/react.png",
  name: "Talk about React",
  members: ["late-flower-4"],
});

const ChatApp = () => (
  <Chat client={chatClient} theme="messaging light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default ChatApp;
