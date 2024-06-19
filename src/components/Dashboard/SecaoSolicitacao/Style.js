import styled from "styled-components";

const SecaoSolicitacaoStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
                transform: scale(1.05);
            }
            
            &:active {
                transform: scale(0.95);
            }
        }
    }

    @media only screen and (max-width: 1330px) {
        .filtro{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }
        
        .filtro{
            button{
                height: 3rem;
                border-radius: 1.1rem;
            }    
        }
        
    }
`

export { SecaoSolicitacaoStyle };