import { useState } from 'react';
import styled from 'styled-components';
import { primaryColor, gray } from '../../styles/colors';

const AddOperation = () => {
    const [ balance, setBalance ] = useState(0);
    const [ concept, setConcept ] = useState('');
    const [ date, setDate ] = useState();
    const submiting = e => {
        console.log( ' enviar' )
        // setName('');    
    };
    return (
    <Container>
        <Card>
            <h2>Agregar Operacion</h2>
            <select className='inputClass' >
                <option disabled={true} selected={true}>Tipo</option>
                <option >Deposito</option>
                <option >Extraccion</option>
            </select>
            <input type="number" placeholder="Importe" 
              id="amount" className='inputClass' 
              onChange={ e => setBalance(e.target.value) }
              value={balance}
              />
            <input type="text" placeholder="Concepto"  
              id="concept" className='inputClass' 
              onChange={ e => setConcept(e.target.value) }
              value={concept}
            />
            <input type="date" placeholder="Fecha" 
                id="date" className='inputClass' 
                onChange={ e => setDate(e.target.value) }
                value={date}
            />
            <Btn onClick={ submiting }>
              Agregar
            </Btn>
        </Card>
    </Container>
  )
};

export default AddOperation;


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