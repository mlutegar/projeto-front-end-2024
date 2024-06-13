import styled from "styled-components";

const TabelaReduzidaStyle = styled.article`
  font-size: 0.9rem;
    
    .status {
        display: flex;  
        justify-content: center;
        align-items: center;
    }

    table {
        margin: auto;
        width: 100%;

        tr:first-child th:first-child {
            border-radius: 15px 0 0 0; // Arredondando o canto superior esquerdo do primeiro cabeçalho
        }

        tr:first-child th:last-child {
            border-radius: 0 15px 0 0; // Arredondando o canto superior direito do último cabeçalho
        }

        th {
            background-color: #002D55;
            color: white;
            padding: 0.3rem 1.0rem;
            font-weight: 600;
        }

        td {
            background-color: #D8E8F7;
            text-align: center;
            padding: 0.3rem 1.0rem;
        }
    }
    
    svg {
        width: 2rem;
        height: 2rem;
    }
    
  a {
    color: black;
  }

  span {
      width: 100%;
    padding: 0.1rem 0.7rem;
    color: white;
    font-weight: 400;
  }
    

    
  //  Botão transparente para download
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out, transform 0.2s ease;
    }
    
    button:hover svg{
        color: var(--primaria);
        transform: scale(1.05);
        
        &:active {
            transform: scale(0.95);
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
        
        svg{
            width: 1.2rem;
        }
        .status-botao{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

`

export { TabelaReduzidaStyle };