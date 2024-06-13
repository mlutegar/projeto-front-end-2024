import styled from 'styled-components';

const TabelaEstilo = styled.article`
    font-size: 0.9rem;
    animation: fadeIn 0.5s ease-in-out;

    .status {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    table {
        margin: auto;
        width: 100%;
        border-collapse: collapse;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        tr:first-child th:first-child {
            border-radius: 15px 0 0 0;
        }

        tr:first-child th:last-child {
            border-radius: 0 15px 0 0;
        }

        th {
            background-color: #002D55;
            color: white;
            padding: 0.6rem 1.2rem;
            font-weight: 600;
            text-align: left;
            border-bottom: 2px solid #d9e2ec;
            text-align: center;
        }

        td {
            background-color: #f0f4f8;
            text-align: center;
            padding: 0.6rem 1.2rem;
            border-bottom: 1px solid #d9e2ec;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #e0e4e8;
            }
        }
    }

    svg {
        width: 2rem;
        height: 2rem;
        transition: color 0.3s ease, transform 0.3s ease;
    }

    a {
        color: black;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    span {
        width: 100%;
        padding: 0.3rem 0.7rem;
        color: white;
        font-weight: 400;
        border-radius: 5px;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out, transform 0.2s ease;

        &:hover svg {
            color: var(--primaria);
            transform: scale(1.05);

            &:active {
                transform: scale(0.95);
            }
        }
    }

    .nao-visto {
        background-color: #CF8686;
    }

    .andamento {
        background-color: #DFCF95;
    }

    .realizado {
        background-color: #86CF8D;
    }

    .nao-visto, .andamento, .realizado {
        color: white;

        svg {
            width: 1.2rem;
        }

        .status-botao {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export { TabelaEstilo };