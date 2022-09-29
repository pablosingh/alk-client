import { useState } from 'react';
import styled from 'styled-components';
import { primaryColor, gray } from '../styles/colors';

const SearchBar = () => {
    const [ text, setText ] = useState('');
    const submiting = e => {
        // console.log( name +': ' + balance )
        // setName('');
        // setBalance();
      };
    return (
    <Container>
        <Card>
            <h3>Search</h3>
            <input type="text" placeholder="Nombre" 
              id="name" className='inputClass'
              onChange={ e => setText(e.target.value) }
              value={text}/>
              <Btn onClick={ submiting }>
                Buscar
            </Btn>
        </Card>
    </Container>
  )
}

export default SearchBar;

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
    .inputClass{
      color: white;
      font-weight: bold;
      margin: 0.5em 0.2em;
      padding: 0.2em 0.9em;
      background-color: rgba( 50, 50, 50, 0.8 );
      border-radius: 3em;
    }
`;

const Btn = styled.button`
  background-color: ${gray};
  color: white;
  margin: 0.3em 0.3em;
  padding: 0.5em 1em;
  border-radius: 2em;
  transition: all .4s ease;
`;