import { useState, useEffect } from "react";

// mark all the data as mine
const PREFIX = "aaron-chat-app";

// lets use local storage to store our state to make it stick around
export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  //look in local storage for my prefixed key and parse it
  const jsonValue = window.localStorage.getItem(prefixedKey);

  // use set state
  const [value, setValue] = useState(() => {
    if (jsonValue != null && jsonValue !== "undefined") {
      return JSON.parse(jsonValue);
    }

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  return [jsonValue, setValue];
}
