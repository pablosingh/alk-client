import styled from 'styled-components';

const TextField = props => {
  return (
    <Container>
        <div 
            className="input"
            contenteditable="true"
            onChange={(e)=>console.log(e)}
            
        ></div>
    </Container>
  )
};

export default TextField;

const Container = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5em;
    .input{
        border: none;
        width: 5vw;
        color: white;
        // margin: 0.5em 0.2em;
        padding: 0.2em 0.7em;
        background-color: rgba( 50, 50, 50, 0.8 );
        border-radius: 3em;
        // border: 1px solid red;
    }
`;