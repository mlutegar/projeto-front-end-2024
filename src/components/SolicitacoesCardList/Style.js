import styled from "styled-components";

const SolicitacoesCardListStyle = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 768px) {
        display: flex;
    }
`;

export { SolicitacoesCardListStyle};