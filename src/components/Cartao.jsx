import styled from "styled-components";

const CardEstilo = styled.div`
    .card {
        background: var(--primaria);
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 20px;
        transition: transform 0.2s, box-shadow 0.2s;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        &:active {
            transform: translateY(0);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    }

    .card-header {
        display: flex;
        justify-content: flex-end;

        button {
            background: none;
            border: none;
            cursor: pointer;
            transition: transform 0.2s ease;

            &:hover svg {
                transform: scale(1.2);
            }
        }
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #ECF0F1;

        p {
            margin: 0;
        }

        .status {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px;
            border-radius: 5px;

            &.status-pendente { background: #E74C3C; }
            &.status-andamento { background: #F1C40F; }
            &.status-concluido { background: #2ECC71; }
        }

        button {
            background: none;
            border: none;
            cursor: pointer;

            svg {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    button:hover svg {
        color: #3498DB;
    }

    a {
        color: #ECF0F1;
    }
`;

const Cartao = (props) => {
    return <CardEstilo>{props.linha}</CardEstilo>;
};

export default Cartao;

const CartaoServicosStyle = styled.div`
    display: none;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        display: flex;
    }
`;

export { CartaoServicosStyle };