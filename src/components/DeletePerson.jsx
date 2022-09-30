import { useState } from 'react';
import styled from 'styled-components';
import { primaryColor, gray } from '../styles/colors';

const DeletePerson = (props) => {
  return (
    <Container>
        <Card>
            <h3>Eliminar ? {props?.name}</h3>
            <div>
                <Btn>Si</Btn><Btn>Volver</Btn>
            </div>
        </Card>
    </Container>
  )
}

export default DeletePerson;

const Container = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    min-height: 50%;
    width: 50%;
    background-color: ${primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3em;
`;

const Btn = styled.button`
  background-color: ${gray};
  color: white;
  margin: 0.3em 0.3em;
  padding: 0.5em 1em;
  border-radius: 2em;
  transition: all .4s ease;
`;