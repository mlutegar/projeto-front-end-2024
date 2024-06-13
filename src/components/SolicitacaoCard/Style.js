import styled from "styled-components";

const SolicitacaoCardStyle = styled.div`
    margin: 20px;
    padding: .6rem;
    font-size: 1rem;
    width: 15rem;
    border-radius: 35px;
    background-color: var(--background);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
    button {
        border-radius: 15px;
        height: 2rem;
        width: 7rem;
        background-color: var(--primaria);
        color: #fff;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
    
    button:active {
        background-color: #004380;
    }
    
    span{
        display: block;
    }
    
    div#navbar{
        display: flex;
        justify-content: flex-end;
        margin-right: 1em;
        margin-top: 0.3em;
    }
    
    div#tipo{
        text-align: left;
        margin-left: 1em;
    }

`;

export {SolicitacaoCardStyle};