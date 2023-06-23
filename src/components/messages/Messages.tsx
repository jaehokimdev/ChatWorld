import React from "react";
import Message from "./Message";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

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
        <Button type="submit" variant="warning">
          Send
        </Button>
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
      border-radius: 5%;

      &::placeholder {
        font-size: 0.95rem;
        color: #ccc;
      }
    }

    Button {
      display: inline-block;
      height: 90%;
      width: 15%;
      font-size: 1.2rem;
      font-weight: 300;
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
