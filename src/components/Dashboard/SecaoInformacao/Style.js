import styled from "styled-components";

const SecaoInfoStyle = styled.article`
    display: grid;
    grid-template-areas:
        "geral linha especifico"
    ;
    grid-template-columns: 1fr .2fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    justify-content: space-evenly;
    
    
    .geral{
        grid-area: geral;
        margin: 0px 10px;
    }
    
    .especifico{
        grid-area: especifico;
        margin: 0px 10px;
    }
    
    .linha{
        grid-area: linha;
        width: 2px;
        height: 90%;
        background-color: #023859FF;
    }
`;

export {SecaoInfoStyle};