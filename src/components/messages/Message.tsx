import React from "react";
import Moment from "react-moment";
import styled from "styled-components";

const Message = (props: {
  message: { message: string; username: string };
  username: string;
}) => {
  const messageReceived = props.message.username !== props.username;
  return (
    <MessageType className={messageReceived ? "received" : "sended"}>
      <MessageInfo className="message-info">
        <span>{props.message.username}</span>{" "}
        <Moment format="MM/DD/YYYY h:mm:ss">{Date.now()}</Moment>
      </MessageInfo>
      <p>{props.message.message}</p>
    </MessageType>
  );
};

const MessageType = styled.li`
  font-weight: 300;
  width: fit-content;
  max-width: 70%;
  border-radius: 10px;
  margin-bottom: 20px;
  font-family: $roboto;
  padding: 10px;
`;

const MessageInfo = styled.div`
  margin-bottom: 3px;

  span,
  time {
    font-size: 0.8rem;
  }

  span {
    color: orange;
  }

  time {
    color: #ddd;
  }
`;

export default Message;
