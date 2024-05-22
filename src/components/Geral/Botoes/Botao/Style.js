import styled from "styled-components";

const BotaoStyle = styled.div`
    button {
        background-color: var(--primaria);
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out, transform 0.2s ease;

        &:hover {
            transform: scale(1.05);
        }

        &:active {
            transform: scale(0.95);
        }
    }
`;

export {BotaoStyle};
