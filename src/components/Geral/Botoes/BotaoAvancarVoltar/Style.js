import styled from "styled-components";

const BotaoAvancarVoltarStyle = styled.div`
    button {
        text-decoration: none;
        display: inline-block;
        padding: 6px 12px;  // Tamanho reduzido do botão
        transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;  // Transições para cor e escala
        font-size: 0.9rem;  // Tamanho da fonte ajustado
        border: none;       // Remove a borda padrão do botão
        cursor: pointer;    // Cursor como ponteiro para indicar ação
        outline: none;      // Remove o destaque ao focar (acessibilidade pode exigir ajustes adicionais)
    }

    button:hover {
        background-color: #ccc;  // Cor para hover
        color: black;
    }

    button:active {
        background-color: #bbb;  // Cor para estado ativo
        transform: scale(0.98);  // Efeito de pressionar
    }

    .previous {
        background-color: #f1f1f1;
        color: black;
    }

    .next {
        background-color: rgb(2, 56, 89);
        color: white;
    }

    .round {
        border-radius: 50px;  // Bordas arredondadas
    }
`

export { BotaoAvancarVoltarStyle };
