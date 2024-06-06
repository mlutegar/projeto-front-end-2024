import styled from "styled-components";

const TabelaServicosStyle = styled.div`

    /* Adicione estas classes ao seu arquivo CSS */

    .status-pendente {
        background-color: #ffc107; /* amarelo */
        color: white;
    }

    .status-em-andamento {
        background-color: #17a2b8; /* azul claro */
        color: white;
    }

    .status-concluido {
        background-color: #28a745; /* verde */
        color: white;
    }

    .status-nao-iniciado {
        background-color: #6c757d; /* cinza */
        color: white;
    }

    .status-imagens-erradas {
        background-color: #dc3545; /* vermelho */
        color: white;
    }

    .status-imagens-calibracao-errada {
        background-color: #fd7e14; /* laranja */
        color: white;
    }

    .status-calculo-processo {
        background-color: #007bff; /* azul */
        color: white;
    }


    @media only screen and (max-width: 1400px) {
        table td:nth-child(2),
        table th:nth-child(2) {
            display: none;
        }
    }



    @media only screen and (max-width: 1300px) {
        table td:nth-child(3),
        table th:nth-child(3) {
            display: none;
        }
    }

    @media only screen and (max-width: 1150px) {
        table td:nth-child(11),
        table th:nth-child(11) {
            display: none;
        }
    }

    @media only screen and (max-width: 1024px) {
        table td:nth-child(5),
        table th:nth-child(5) {
            display: none;
        }
    }

    @media only screen and (max-width: 880px) {
        .ocultar {
            display: none;
        }
    }

    @media only screen and (max-width: 780px) {
        table td:nth-child(4),
        table th:nth-child(4) {
            display: none;
        }
    }

    @media only screen and (max-width: 700px) {
        table td:nth-child(10),
        table th:nth-child(10) {
            display: none;
        }
    }
`;

export {TabelaServicosStyle};