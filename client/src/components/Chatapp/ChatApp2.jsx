import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import Home from "./Home";
import ChatRoom from "./ChatRoom";

function ChatApp2() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId" component={ChatRoom} />
      </Switch>
    </Router>
  );
}

export default ChatApp2;
