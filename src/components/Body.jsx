import React from 'react';
import styled from 'styled-components';
import AddPerson from './AddPerson';
import EditPerson from './EditPerson';
import SearchBar from './SearchBar';

const Body = () => {
  return (
    <Container>
        {/* <AddPerson/> */}
        {/* <EditPerson id='9'/> */}
        <SearchBar/>
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

