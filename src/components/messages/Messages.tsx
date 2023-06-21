import React from "react";
import Message from "./Message";

const Messages = (props: {
  messages: { message: string; username: string }[];
  username: string;
  handleSendMessage: Function;
  setMessage: Function;
  message: string;
}) => {
  return (
    <div className="messages">
      <ul className="message-list scrollable">
        {props.messages.map((message, i) => (
          <Message
            key={i + message.username}
            message={message}
            username={props.username}
          />
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          props.handleSendMessage();
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={props.message}
          onChange={(e) => props.setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messages;
