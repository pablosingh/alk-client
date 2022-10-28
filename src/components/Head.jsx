import React from 'react';
import { primaryColor } from '../styles/colors';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import Profile from "./Profile";
// import { useJwt } from "react-jwt";

const Head = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  // const { decodeToken, isExpired } = useJwt("Firma");
  // const respuesta = useJwt("eyJhbGciOiJIUzI1NiJ9.UGFibG8.Ka4NuektDzT-XePAa3vh_uTHyU9SItPL_oOGCe1FsDg");

  // const testToken = async() => {
  //   await fetch( `http://localhost:3001/jwt` )
  //           .then( js => js.json() )
  //           .then( (token) => {
  //             console.log(token);
  //             // const myDecodedToken = decodeToken(token.token);
  //             // const isMyTokenExpired = isExpired(token.token);
  //             // console.log(myDecodedToken);
  //             // console.log(isMyTokenExpired);
  //             console.log(respuesta);
  //             // const t = useJwt(token.token);
  //             // console.log(t);
  //           });
  // };

  if (isLoading) {
    return <h1>Is Loading</h1>
  }
  return (
    <Container>
      {/* <SubContainer> */}
        {isAuthenticated ? <Profile /> : <LoginButton />}
        {/* <button onClick={testToken}>token</button> */}
      {/* </SubContainer> */}
    </Container>
  )
}

export default Head;

const Container = styled.div`
  margin: 0;
  padding: 0;
  // min-height: 20vh;
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