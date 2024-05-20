import styled from "styled-components";

const SecaoSolicitacaoStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;
    
    .filtro{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        
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
                background-color: var(--destaque);
            }
            
            &:active {
                transform: scale(0.95);
            }
        }
    }

    .btn {
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
`

export { SecaoSolicitacaoStyle };