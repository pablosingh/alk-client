import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { primaryColor, gray } from '../styles/colors';


const Operation = props => {
    const initValues = {
        type: '',
        concept: '',
        amount: 0,
        date: '',
        editState: true,
        addState: false
    };
    const [ data, setData ] = useState(initValues);   
    useEffect( ()=> {
        setData({
            ...initValues,
            ...props,
            addState: props.addState ? true : false
        });
    }, []);
    const submiting = e => {
        console.log(data);
        // setData(initValues);
    };
    const changing = e => {
        // console.log(e.target);
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
  return (
    <Container>
        <div className="panel">
            <select className='inputClass' onChange={ changing } 
                name="type" value={data?.type} 
                disabled={!data.addState && data.editState}>
                {/* <option disabled={true} selected={true}>Tipo</option>    */}
                <option value="deposit">Deposito</option>
                <option value="withdraw">Extraccion</option>
            </select>
            <input type="text" placeholder="Concepto"  
                name="concept" className='inputClass concept' 
                onChange={ changing }
                value={ data?.concept }
                disabled={!data.addState && data.editState}
                />
            <input type="text" placeholder="Importe" 
                name="amount" className='inputClass amount' 
                onChange={ changing }
                value={data?.amount}
                disabled={!data.addState && data?.editState}
                />
            <input type="date" placeholder="Fecha" 
                name="date" className='inputClass' 
                onChange={ changing }
                value={data?.date}
                disabled={!data.addState && data.editState}
                />
            <Btn className={`${ data.addState ? `on`: `off` }`}
                onClick={ ()=> console.log('Agregar')}>
                Agregar
            </Btn>
            <Btn 
                className={`${ !data.addState && !data.editState ? `on`: `off` }`}
                onClick={ ()=> setData({...data, editState: !data.editState})}>
                ok
            </Btn>
            <Btn className={`${ !data.addState && data.editState ? `on`: `off` }`}
                onClick={ ()=> setData({...data, editState: !data.editState})}>
                Edit
            </Btn>
            
            <Btn className={`${ !data.addState && data.editState ? `on`: `off` }`}
                onClick={ ()=> console.log('borrar')}>  
                Borrar
            </Btn>
            {/* <Btn onClick={ ()=> setData({...data, addState: !data.addState}) }>
                Ver
            </Btn> */}
        </div>
    </Container>
  )
}

export default Operation;

const Container = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    .inputClass{
        color: white;
        font-weight: bold;
        margin: 0.5em 0.2em;
        padding: 0.2em 0.9em;
        background-color: rgba( 50, 50, 50, 0.8 );
        border-radius: 3em;
    }
    .concept{
        width: 7em;
    }
    .amount{
        width: 4em;
    }
    .on{
        display: inline-block;
    }
    .off{
        display: none;
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