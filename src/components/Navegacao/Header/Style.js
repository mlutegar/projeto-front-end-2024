import styled from "styled-components";

const Tab= styled.div`
    ${({ isActive }) =>
            isActive &&
            `
    color: var(--destaque);
    &:after {
        color: #ffffff;
        background-color: #023859;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
  `}
`;

const HeaderStyle = styled.header`
    background-color: var(--background);
    display: flex;
    margin: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: #023859 solid 17px;
    z-index: 10;  /* Define um valor alto para garantir que fique acima da sidebar */
    
    &.active {
        position: fixed;  /* Torna o header fixo no topo da página */
        top: 0;
        width: 100%;  /* Garante que o header ocupe toda a largura da tela */
    }

    #nav1{
        display: flex;
        align-items: center;

        #logo {
            display: flex;
            img {
                width: 10rem;
            }
        }
    }

    #nav2{
        font-size: 1rem;
    }

    #nav2 a {
        text-align: center;
        padding: 1.5em .5em;
        padding-top: 0.5em;
        margin: 0 .3em;
        min-width: 5em;
        background-color: transparent;
        text-decoration: none;
        font-weight: bold;
        color: var(--secundaria);
        text-transform: uppercase;
        &:hover{
            color: #ffffff;
            background-color: #023859;
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
        }
    }

    .hamburguer{
        background: none;
        font-size: 30px;
        width: 60px;
        border: none;
        cursor: pointer;
    }

    // Telas menores que 769px (Tablets)
    @media only screen and (max-width: 769px) {
        display: block;
        
        #nav1{
            justify-content: space-between;    
        }
        
        #nav2{
            display: none;
        }
    }
    
`;

export { HeaderStyle, Tab };