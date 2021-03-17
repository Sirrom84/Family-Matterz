import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  InfiniteScrollPaginator,
  MessageInput,
  MessageInputFlat,
  MessageList,
  MessageTeam,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";

// const apiKey = process.env.REACT_APP_STREAM_KEY;
// const userId = process.env.REACT_APP_USER_ID;
// const userToken = process.env.REACT_APP_USER_TOKEN;

const filters = { type: "messaging" };
const sort = { last_message_at: -1 };
const theme = "messaging dark";

var stream = require("getstream");
// Instantiate a new client (server side)
client = stream.connect(
  "etwupmse7csk",
  "j2vrj3j2xr983futpnkh4zaww2vughhvec7uwwytvbgnj4wg42ympcqs6324hzyr",
  "1115405"
);
// Instantiate a new client (client side)
client = stream.connect("etwupmse7csk", null, "1115405");
// Find your API keys here https://getstream.io/dashboard/

const Paginator = (props) => (
  <InfiniteScrollPaginator threshold={300} {...props} />
);

const chatClient = StreamChat.getInstance(apiKey);

chatClient.connectUser({ id: userId }, userToken);

const App = () => (
  <Chat client={chatClient} theme={theme}>
    <ChannelList filters={filters} sort={sort} Paginator={Paginator} />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList Message={MessageTeam} />
        <MessageInput Input={MessageInputFlat} />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
