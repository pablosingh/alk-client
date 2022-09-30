import React from 'react';
import styled from 'styled-components';
// import AddPerson from './AddPerson';
// import DeletePerson from './DeletePerson';
// import EditPerson from './EditPerson';
// import SearchBar from './SearchBar';
// import AddOperation from './operations/AddOperation';
import Operation from './Operation';
import Dashbord from './Dashbord';

const Body = () => {
  return (
    <Container>
        {/* <AddPerson/> */}
        {/* <EditPerson id='9'/> */}
        {/* <SearchBar/> */}
        {/* <DeletePerson name='Persona 1'/> */}
        {/* <AddOperation/> */}
        <Dashbord/>
        {/* <Operation 
                type="withdraw" concept="otros"
                amount="500" date="2022-09-20"
            />   */}
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

