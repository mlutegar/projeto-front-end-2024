import styled from "styled-components";

const PerfilStyle = styled.div`
    background-color: var(--detalhe);
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    
    #container-perfil{
        display: grid;
        grid-template-areas:
            "header"
            "body"
        ;
        grid-template-columns: auto;
        grid-template-rows: repeat(2,auto);
        gap: .3rem;
        padding: .3rem;

        #header-perfil{
            grid-area: header;
        }
        
        #body-perfil{
            grid-area: body;
        }
    }
`;

export {PerfilStyle};