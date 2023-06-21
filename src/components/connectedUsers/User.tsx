import React from "react";
import styled from "styled-components";

const User = (props: { user: { id: string; username: string } }) => {
  return (
    <Users>
      <img src="/assets/user.png" alt="Uknown User" />
      <span>{props.user.username}</span>
    </Users>
  );
};

const Users = styled.li`
  padding: 10px 20px;
  margin-bottom: 15px;
  background: rgba(77, 77, 84, 0.6);
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    font-size: 1rem;
  }
`;

export default User;
