import { useState, useEffect } from "react";

// mark all the data as mine
const PREFIX = "aaron-chat-app";

// lets use local storage to store our state to make it stick around
export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  // use set state
  const [value, setValue] = useState(() => {
    //look in local storage for my prefixed key and parse it
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue === "null" && jsonValue !== "undefined")
      return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  //  every time some one changes there id / makes a new one we will update storage
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
