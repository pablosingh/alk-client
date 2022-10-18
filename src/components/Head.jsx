import React from 'react';
import { primaryColor } from '../styles/colors';
import styled from 'styled-components';

const Head = () => {
  return (
    <Container>
        Head
    </Container>
  )
}

export default Head;

const Container = styled.div`
    margin: 0;
    padding: 0;
    height: 20vh;
    width: 100%;
    display: fixed;
    top: 0;
    background-color: ${primaryColor};
    color: white;
`;

