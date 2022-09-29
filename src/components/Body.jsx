import React from 'react';
import styled from 'styled-components';
import AddPerson from './AddPerson';

const Body = () => {
  return (
    <Container>
        <AddPerson/>
    </Container>
  )
};
export default Body;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #111;
`;

