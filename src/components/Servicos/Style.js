import styled from "styled-components";

const TabelaServicosStyle = styled.div`

    /* Adicione estas classes ao seu arquivo CSS */


    .status-pendente {
        background-color: var(--primary-color);
        color: var(--text-color);
        padding: 0.5em 1em;
        border-radius: 4px;

    }

    .status-andamento {
        background-color: var(--secondary-color);
        color: var(--text-color);
        padding: 0.5em 1em;
        border-radius: 4px;

    }

    .status-concluido {
        background-color: var(--success-color);
        color: var(--text-color);
        padding: 0.5em 1em;
        border-radius: 4px;

    }

    .status-nao-iniciado {
        background-color: var(--secondary-color);
        color: var(--text-color);
        padding: 0.5em 1em;
        border-radius: 4px;

    }

    .status-imagens-erradas {
        background-color: var(--danger-color);
        color: var(--text-color);
        padding: 0.5em 1em;
        border-radius: 4px;
    }

    .status-calibracao-errada {
        background-color: var(--primary-color);
        color: var(--text-color);
        padding: 0.5em 1em;
        border-radius: 4px;

    }

    .status-calculo {
        background-color: var(--success-color);
        color: var(--text-color);
        padding: 0.5em 1em;
        border-radius: 4px;

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

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export {TabelaServicosStyle};