import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import { AiOutlinePlusCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";
import { MdDeleteOutline } from 'react-icons/md';
import { primaryColor, secundaryColor, gray } from '../styles/colors';
import { BACKEND_URL, loadOperations } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Operation = props => {
    const sizeBtn = 15;
    const dispatch = useDispatch();
    const state = useSelector( state => state );
    const initValues = {
        type: 'deposit',
        concept: '',
        amount: 0,
        dateOp: '',
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
        // console.log(e);
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        console.log({[e.target.name]: e.target.value});
    };
    const editing = async () => {
        // console.log(data);
        await fetch(`${BACKEND_URL}/editOperation` , {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        // .then( res => console.log(res.json()))
        .then( res => dispatch( loadOperations(state.id) ))
        .catch(err => console.log(err) );
    };
    const deleting = async () => {
        await fetch(`${BACKEND_URL}/deleteOperation` , {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then( res => dispatch( loadOperations(state.id) ))
        .catch(err => console.log(err) );
    };
    const adding = async () => {
        console.log(data);
        await fetch(`${BACKEND_URL}/createOperation` , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then( res => console.log(res.json()))
        .then( res => dispatch( loadOperations(state.id) ))
        .catch(err => console.log(err) );
    };
  return (
    <Container>
        <div className="panel">
            <div className="one type">
                {data?.type && data?.type=='deposit' ? <BsArrowDownSquare/> : <BsArrowUpSquare/>}
                <input type="text" placeholder="Concepto"  
                    name="concept" className='inputClass' 
                    onChange={ changing }
                    value={ data?.concept }
                    disabled={!data.addState && data.editState}
                    size={ data?.concept?.length>4 ? data.concept.length-4 : 4 }
                />
            </div>
            <select className='inputClass typeSelect' onChange={ changing } 
                name="type" value={data?.type} 
                disabled={!data.addState && data.editState}>
                {/* <option disabled={true} selected={true}>Tipo</option>    */}
                <option value="deposit">Deposito</option>
                <option value="withdraw">Extraccion</option>
            </select>
            <input type="text" placeholder="Concepto"  
                name="concept" className='inputClass' 
                onChange={ changing }
                value={ data?.concept }
                disabled={!data.addState && data.editState}
                size={ data?.concept?.length>4 ? data.concept.length-4 : 4 }
            />

            <input type="text" placeholder="Importe" 
                name="amount" className='inputClass' 
                onChange={ changing }
                value={data?.amount}
                disabled={!data.addState && data?.editState}
                size={1}
            />
            <input type="date" 
                name="dateOp" className='inputClass' 
                onChange={ changing }
                value={data?.dateOp}
                disabled={!data.addState && data.editState}
                size={1}
            />
            <Btn className={`${ data.addState ? `on`: `off` }`}
                onClick={ ()=> {
                    adding();
                    setData({
                        ...initValues,
                        ...props,
                        addState: props.addState ? true : false
                    });
                    }}>
                <AiOutlinePlusCircle size={sizeBtn}/>
            </Btn>
            <Btn 
                className={`${ !data.addState && !data.editState ? `on`: `off` }`}
                onClick={ ()=> {
                    setData({...data, editState: !data.editState});
                    editing();
                    }}>
                <AiOutlineCheckCircle size={sizeBtn}/>
            </Btn>
            <Btn className={`${ !data.addState && data.editState ? `on`: `off` }`}
                onClick={ ()=> setData({...data, editState: !data.editState})}>
                <FiEdit size={sizeBtn}/>
            </Btn>
            
            <Btn className={`${ !data.addState && data.editState ? `on`: `off` }`}
                onClick={ ()=> deleting()}>  
                <MdDeleteOutline size={sizeBtn}/>
            </Btn>
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
        // margin: 0.5em 0.2em;
        // padding: 0.2em 0.7em;
        background-color: rgba( 50, 50, 50, 0.8 );
        border-radius: 3em;
        size: 5;
    }
    .panel{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .concept{
        width: 10vw;
        margin: 0em 1.5em;
    }
    .amount{
        width: 10vw;
        margin: 0em 1.5em;
    }
    .date{
        width: 10vw;
        margin: 0em 1.5em;
    }
    .on{
        display: inline-block;
    }
    .off{
        display: none;
    }
    .type{
        display: flex;
        @media (min-width: 768px) {
            display: none;
        }
    }
    .typeSelect{
        display: flex;
        @media (max-width: 768px) {
            display: none;
        }
    }
    .one{

    }
    .two{

    }
    .three{
        
    }
`;

const Btn = styled.button`
  background-color: ${gray};
  color: white;
  margin: 0.3em 0.3em;
  padding: 0.5em 1em;
  border-radius: 2em;
  transition: all .4s ease;
  :hover{
    background-color: ${secundaryColor};
    color: ${'black'};
  }
`;