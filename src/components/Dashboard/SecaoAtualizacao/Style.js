import styled from "styled-components";

const SecaoAtualizacaoStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;

    button {
        background-color: white;  // Cor azul para os botões
        color: rgb(2, 56, 89);
        border: none;
        padding: 8px 16px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out, transform 0.2s ease;

        &:hover {
            background-color: rgb(2, 56, 89); // Cor mais escura no hover
            color: white;
        }

        &:active {
            transform: scale(0.95);  // Efeito de clique reduzindo ligeiramente o tamanho
        }
    }
    
    #cards{
        display: flex;
        margin-left: 1rem;
        margin-right: 1rem;
        gap: 2rem;
        flex-wrap: wrap;
    }
`

export { SecaoAtualizacaoStyle };
