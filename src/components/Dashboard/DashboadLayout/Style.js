import styled from "styled-components";

const DashboadLayoutStyle = styled.div`
    .container{
        display: grid;
        grid-template-areas:
            "solicitacao solicitacao"
            "calibracao informacao"
            "atualizacao atualizacao"
        ;
        grid-template-columns: 2fr 1.5fr;
        gap: 20px;
        flex-wrap: wrap;
    }
    
    .solicitacao{
        grid-area: solicitacao;
    }
    
    .calibracao{
        grid-area: calibracao;
    }
    
    .informacao{
        grid-area: informacao;
        height: 100%;
    }
    
    .atualizacao{
        grid-area: atualizacao;
    }

    // Telas menores que 1200px (Desktop pequenos)
    @media only screen and (max-width: 1200px) {
        .container{
            display: grid;
            grid-template-areas:
            "solicitacao solicitacao"
            "calibracao calibracao"
            "informacao informacao"
            "atualizacao atualizacao"
        ;
            grid-template-columns: 2fr 1.5fr;
            gap: 20px;
            flex-wrap: wrap;
        }
    }
    
    // Telas menores que 769px (Tablets)
    @media only screen and (max-width: 769px) {
        .container{
            display: grid;
            grid-template-areas:
            "solicitacao"
            "calibracao"
            "informacao"
            "atualizacao"
        ;
            grid-template-columns: 1fr;
            gap: 20px;
            flex-wrap: wrap;
        }
    }
`;

export {DashboadLayoutStyle};
