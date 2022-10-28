import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setUser} from '../redux/actions';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  // console.log(user);
  useEffect(() => {
    if(isAuthenticated)
      dispatch(setUser(user));
  }, [isAuthenticated]);
  return (
    isAuthenticated && (
      <Container>
        {user.picture ? 
          <img src={user.picture} alt={user.name} className='imgProfile'/>
          : <></>
        }
        <div className="data">
            <h4 className="name">{user.name}</h4>
            <p className="email">{user.email}</p>
            {/* <button onClick={()=> console.log(user)}>User</button> */}
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
        margin: 0.5em 1em 0.5em 3em;
    }
    .name{
      margin: 0.2em 0.2em;
      padding: 0;
    }
    .email{
      margin: 0.2em 0.2em;
      padding: 0;
    }
`;