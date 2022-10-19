import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import styled from 'styled-components';

// import JSONPretty from "react-json-pretty";
// import "react-json-pretty/themes/monikai.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  // return <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    isAuthenticated && (
      <Container>
        <img src={user.picture} alt={user.name} className='imgProfile'/>
        <div className="data">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            {/* <JSONPretty data={user} />; */}
            <LogoutButton />
        </div>
      </Container>
    )   
  );
};

export default Profile;

const Container = styled.div`
    display: flex;
    align-items: center;
    //   justify-content: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    // border: 2px solid black;
    .data{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        height: 100%;
        // border: 2px solid red;
        margin: 0.5em;
    }
    .imgProfile{
        border-radius: 50%;
        // border: 2px solid beige;
        margin: 0.5em 1em 0.5em 1em;
    }
`;