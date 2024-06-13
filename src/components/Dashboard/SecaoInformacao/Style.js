import styled from 'styled-components';

const SecaoInfoStyle = styled.article`
    display: grid;
    grid-template-areas: "geral linha especifico";
    grid-template-columns: 1fr 0.2fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    animation: fadeIn 0.5s ease-in-out;

    .geral, .especifico {
        margin: 0 10px;
        padding: 15px;
        border-radius: 10px;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.02);
        }
    }

    .linha {
        width: 2px;
        height: 90%;
        background-color: #023859FF;
    }

    @media only screen and (max-width: 800px) {
        grid-template-areas:
      "geral"
      "linha"
      "especifico";
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        gap: 20px;

        .linha {
            width: 100%;
            height: 2px;
        }
    }
`;

export { SecaoInfoStyle };
