import styled from "styled-components";

const TabelaCalibracoesStyle = styled.div`
    
    table{
        th{
            font-weight: bolder;
            padding: 15px;
        }

        td:nth-child(5),
        th:nth-child(5) {
            width: 2rem;
        }
    }
    
    
    @media only screen and (max-width: 1400px) {
        table td:nth-child(4),
        table th:nth-child(4) {
            display: none;
        }
    }
    
    @media only screen and (max-width: 1150px) {
        table td:nth-child(3),
        table th:nth-child(3) {
            display: none;
        }
    }

    @media only screen and (max-width: 1024px) {
        table td:nth-child(1),
        table th:nth-child(1) {
            display: none;
        }
    }

    @media only screen and (max-width: 880px) {
        .ocultar {
            display: none;
        }
    }

    @media only screen and (max-width: 780px) {
        table td:nth-child(6),
        table th:nth-child(6) {
            display: none;
        }
    }
`;

export {TabelaCalibracoesStyle};