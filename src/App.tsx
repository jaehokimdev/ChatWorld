import React from "react";
import "./App.css";
import styled from "styled-components";
import Login from "./components/Login";

function App() {
  return (
    <Container>
      <Card>
        <Login />
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #36d1dc, #5b86e5);
`;

const Card = styled.div`
  height: 90%;
  width: 80%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(14px);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

export default App;
