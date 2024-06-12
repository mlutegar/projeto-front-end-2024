import styled from "styled-components";
import {fadeIn} from "./FadeIn";

export const ComponenteArquivoStyle = styled.div`
    background-color: #f0f4f8;
    border: 1px solid #d9e2ec;
    border-radius: 15px;
    padding: 20px;
    animation: ${fadeIn} 0.5s ease-in-out;

    #header {
        font-size: 1rem;
        font-weight: bold;
        color: #023859;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #body {
        font-size: 1.2em;
        color: #5d737e;
        margin-bottom: 15px;
    }

    #footer {
        display: flex;
        justify-content: space-between;
    }

    button {
        padding: 15px;
        border-radius: 10px;
        height: 50px;
        font-weight: bold;
        border: 1px solid #023859;
        background-color: var(--primaria);
        color: white;
        margin: 0 10px;
        transition: background-color 0.3s, transform 0.3s;

        &:hover {
            cursor: pointer;
            background-color: var(--destaque);
            transform: translateY(-2px);
        }
    }

    .icon {
        color: #ff6b6b;
        font-size: 1.5em;
    }

    .icon-acerto {
        color: #51cf66;
        font-size: 1.5em;
    }
`;