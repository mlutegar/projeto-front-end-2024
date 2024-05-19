import styled from "styled-components";

const SecaoInfoStyle = styled.article`
    display: grid;
    grid-template-areas:
        "geral especifico"
    ;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 10px;
    justify-items: end;
    justify-content: space-evenly;
    
    
    .geral{
        grid-area: geral;
        border-right: 5px solid #023859FF;
    }
    
    .especifico{
        grid-area: especifico;
    }
`;

export {SecaoInfoStyle};