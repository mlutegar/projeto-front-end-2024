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
    // Sombra para a sidebar
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
`;