import React from "react";
import Message from "./Message";
import styled from "styled-components";

const Messages = (props: {
  messages: { message: string; username: string }[];
  username: string;
  handleSendMessage: Function;
  setMessage: Function;
  message: string;
}) => {
  return (
    <Container>
      <MessageList>
        {props.messages.map((message, i) => (
          <Message
            key={i + message.username}
            message={message}
            username={props.username}
          />
        ))}
      </MessageList>
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
    </Container>
  );
};

const Container = styled.div`
  width: calc(70vw - 45px);

  form {
    height: 45px;

    input {
      display: inline-block;
      height: 100%;
      width: 85%;
      color: #333;
      padding: 5px 10px;
      font-size: 1.1rem;

      &::placeholder {
        font-size: 0.95rem;
        color: #ccc;
      }
    }

    button {
      font-family: $roboto;
      display: inline-block;
      height: 100%;
      width: 15%;
      background: $primary-color;
      color: white;
      font-size: 1.2rem;
      font-weight: 300;

      &:hover {
        background: $lighter-blue-color;
      }
    }
  }
`;

const MessageList = styled.ul`
  height: calc(90vh - 60px);
  padding: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 8px;
  }
`;

export default Messages;
