import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";
import styled from "styled-components";
import ConnectedUsers from "./connectedUsers/ConnectedUsers";
import Messages from "./messages/Messages";
import Button from "react-bootstrap/Button";

const Main = () => {
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [connectedUsers, setConnectedUsers] = useState(
    [] as { id: string; username: string }[]
  );
  const [messages, setMessages] = useState(
    [] as { message: string; username: string }[]
  );
  const [message, setMessage] = useState("");

  const socketClient = useRef<SocketIOClient.Socket>();

  useEffect(() => {
    socketClient.current = io.connect(
      "https://port-0-react-typescript-chat-app-server-koh2xlj9mwvdm.sel4.cloudtype.app"
    );

    if (socketClient.current) {
      socketClient.current.on("username-taken", () => {
        toast.error("username is taken");
      });

      socketClient.current.on("username-submitted-successfully", () => {
        setConnected(true);
      });

      socketClient.current.on(
        "get-connected-users",
        (connectedUsers: { id: string; username: string }[]) => {
          setConnectedUsers(
            connectedUsers.filter((user) => user.username !== username)
          );
        }
      );
      socketClient.current.on(
        "receive-message",
        (message: { message: string; username: string }) => {
          setMessages((prev) => [...prev, message]);
        }
      );
    }

    return () => {
      if (socketClient.current) {
        socketClient.current.disconnect();
        socketClient.current = undefined;
      }
    };
  }, [username]);

  const handleConnection = () => {
    if (socketClient.current) {
      socketClient.current.emit("handle-connection", username);
    }
  };

  const handleSendMessage = () => {
    if (socketClient.current) {
      setMessages((prev) => [...prev, { message, username }]);
      socketClient.current.emit("message", { message, username });
      setMessage("");
    }
  };
  return (
    <div>
      {!connected && (
        <UserForm
          onSubmit={(e) => {
            e.preventDefault();
            handleConnection();
          }}
        >
          <h2>Welcome to ChatWorld!!!!</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter your username..."
            required={true}
          />
          <Button type="submit" variant="warning">
            Submit
          </Button>
        </UserForm>
      )}

      {connected && (
        <Container>
          <ConnectedUsers connectedUsers={connectedUsers} />
          <Messages
            message={message}
            setMessage={setMessage}
            messages={messages}
            username={username}
            handleSendMessage={handleSendMessage}
          />
        </Container>
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

const Container = styled.div`
  display: inline-flex;
  width: 100%;
`;

const UserForm = styled.form`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 50px;
  }

  input {
    display: inline-block;
    width: 300px;
    height: 35px;
    margin-bottom: 10px;
    color: #333;
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 5%;

    &::placeholder {
      color: #ccc;
      font-size: 0.9rem;
    }
  }

  Button {
    font-weight: 300;
    font-size: 1rem;
  }
`;

export default Main;
