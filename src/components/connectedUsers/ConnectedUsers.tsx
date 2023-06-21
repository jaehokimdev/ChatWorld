import React from "react";
import User from "./User";
import styled from "styled-components";

const ConnectedUsers = (props: {
  connectedUsers: { id: string; username: string }[];
}) => {
  return (
    <UserList>
      <h2>Connected Users</h2>
      <ul>
        {props.connectedUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </UserList>
  );
};

const UserList = styled.div`
  width: 250px;
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
  background: rgba(77, 181, 255, 0.4);
  color: white;
  font-family: $roboto;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 40px;
    text-align: center;
  }

  ul {
    padding-left: 0;
  }
`;

export default ConnectedUsers;
