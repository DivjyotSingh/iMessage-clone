import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";
import "./Chat.css";
function Chat() {
  const [input, setInput] = useState(" ");
  const sendMessage = (e) => {
    e.preventDefault();
    //firebase Magic
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/*Chat Messages */}
      <div className="chat__messages">
        <h2>I m a Message</h2>
      </div>

      <div className="chat__input">
        <form action="">
          <input
            placeholder="iMessage"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={sendMessage}>Send Messages</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
