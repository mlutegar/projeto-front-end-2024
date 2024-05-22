import styled from "styled-components";

const TabelaServicosStyle = styled.div`
    @media only screen and (max-width: 1400px) {
        table td:nth-child(2),
        table th:nth-child(2) {
            display: none;
        }
    }

    @media only screen and (max-width: 1300px) {
        table td:nth-child(1),
        table th:nth-child(1) {
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

    @media only screen and (max-width: 812px) {
        .ocultar {
            display: none;
        }
    }
`;

export {TabelaServicosStyle};