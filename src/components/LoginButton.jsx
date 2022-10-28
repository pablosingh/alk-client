import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';
import { primaryColor, secundaryColor, gray } from '../styles/colors';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (<Btn onClick={() => loginWithRedirect()}>login</Btn>);
};

export default LoginButton;

const Btn = styled.button`
  background-color: ${gray};
  color: white;
  margin: 0.3em 0.3em 0.3em 2em;
  padding: 0.5em 1em;
  border-radius: 2em;
  transition: all .4s ease;
  :hover{
    background-color: ${secundaryColor};
    color: ${'white'};
  }
`;