import React from 'react';
import { primaryColor } from '../styles/colors';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import Profile from "./Profile";


const Head = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Is Loading</h1>
  }
  return (
    <Container>
      {/* <SubContainer> */}
        {isAuthenticated ? <Profile /> : <LoginButton />}
      {/* </SubContainer> */}
    </Container>
  )
}

export default Head;

const Container = styled.div`
  margin: 0;
  padding: 0;
  min-height: 20vh;
  width: 100%;
  display: absolute;
  top: 0;
  background-color: ${primaryColor};
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;