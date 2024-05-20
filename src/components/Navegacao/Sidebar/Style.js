import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffffff;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .7s;
    z-index: 5;  /* Certifique-se de que este valor é menor que o z-index do header */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    > svg {
        position: fixed;
        color: black;
        width: 30px;
        height: 30px;
        margin-top: 1.5rem;
        margin-left: 1.4rem;
        cursor: pointer;
    }

    .opcoes {
        margin-top: 100px;
        padding-left: 1.4rem;

        h1 {
            font-size: 1.5rem;
            font-weight: normal;
            color: black;
        }
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }

    // Telas menores que 769px (Tablets)
    @media only screen and (max-width: 769px) {
        margin-top: 4rem;
        width: 100%;
        flex-direction: column; /* Garanta que a sidebar ainda fique em coluna */
        align-items: center; /* Centralize os itens horizontalmente */

        > svg {
            margin-left: auto; /* Mova o ícone de fechar para o lado direito */
            margin-right: 1.4rem;
        }

        .opcoes {
            display: flex; /* Use flexbox para alinhar itens lado a lado */
            flex-direction: row; /* Itens em linha */
            justify-content: space-around; /* Distribua os itens uniformemente */
            padding: 1rem; /* Ajuste o padding para melhor aparência */
            margin-top: 0; /* Remova a margem superior */

            h1 {
                display: none; /* Esconda o título */
                font-size: 1rem; /* Ajuste o tamanho da fonte para telas menores */
                margin: 0 10px; /* Adicione margem entre os itens */
            }
        }

        @keyframes showSidebar {
            from {
                opacity: 0;
                width: 0;
            }
            to {
                opacity: 1;
                width: 100%;
            }
        }
    }
`;
