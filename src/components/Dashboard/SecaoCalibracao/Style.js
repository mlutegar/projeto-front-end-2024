import styled from "styled-components";

const SecaoCalibracaoStyle = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9rem;

    a {
        color: black;
    }

    th {
        background-color: #002D55;
        color: white;
        padding: 1rem 1.5rem; // Aumentado para mais espaço
        font-weight: 600; // Arredondando os cantos superiores somente nas extremidades
    }

    td {
        background-color: #D8E8F7;
        text-align: center;
        padding: 1rem 1.5rem; // Aumentado para mais espaço
    }

    span {
        padding: 0.3rem 0.9rem; // Ajuste para mais espaço interno
        border-radius: 20px; // Mais arredondado
        color: white;
        font-weight: 400;
    }

    table {
        margin: auto;
        width: 100%;
        border-collapse: separate; // Permite o espaçamento entre células
        border-spacing: 0 8px; // Espaçamento somente vertical entre as linhas
    }

    tr:first-child th:first-child {
        border-radius: 15px 0 0 0; // Arredondando o canto superior esquerdo do primeiro cabeçalho
    }

    tr:first-child th:last-child {
        border-radius: 0 15px 0 0; // Arredondando o canto superior direito do último cabeçalho
    }

    tr:last-child td:first-child {
        border-radius: 0 0 0 15px; // Arredondando o canto inferior esquerdo da última célula
    }

    tr:last-child td:last-child {
        border-radius: 0 0 15px 0; // Arredondando o canto inferior direito da última célula
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
   `
export { SecaoCalibracaoStyle };