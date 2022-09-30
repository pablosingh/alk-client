import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { primaryColor, gray } from '../styles/colors';
import Operation from './Operation';

const Dashbord = () => {
  return (
    <Container>
        <Card>
            <h3>Dashbord</h3>
            <Operation 
                type="deposit" concept="sueldo"
                amount="1000" date="2022-09-19"
            />
            <Operation 
                type="withdraw" concept="otros"
                amount="500" date="2022-09-20"
            />
            <Operation 
                type="deposit" concept="transferencia"
                amount="456" date="2022-09-01"
            />
            <Operation addState={true} />
        </Card>
    </Container>
  )
}

export default Dashbord;


const Container = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    // flex-direction: column;  
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    // min-height: 50%;
    // width: 80%;
    background-color: ${primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3em;
    .inputClass{
        width: auto;
        color: white;
        font-weight: bold;
        margin: 0.5em 0.2em;
        padding: 0.2em 0.9em;
        background-color: rgba( 50, 50, 50, 0.8 );
        border-radius: 3em;
    }
`;