import React, { useState } from "react";
import Header from "../components/Navegacao/Header/Header";
import styled from "styled-components";

const BaseStyle = styled.div`
    display: grid;
    grid-template-areas: 
            "header"
            "container";
    grid-template-rows: auto 1fr;
    min-height: 100vh;
    overflow: hidden; /* Adiciona esta linha para prevenir overflow */

    #header {
        grid-area: header;
    }

    #container {
        grid-area: container;
        padding: 1rem;
        margin: 20px;
        display: flex;
        flex-direction: column;
        transition: filter 0.3s ease; /* Transição suave para o efeito de blur */
        filter: ${props => props.isSidebarActive ? 'blur(5px)' : 'none'}; /* Aplica o efeito de blur */
    }

    #container h1 span{
        border-bottom: 3px solid var(--primaria);
    }

    #container h1 {
        margin-bottom: 1.5rem;
        font-size: 2rem;
        font-weight: normal;
        color: #232526;
    }
`;

const Base = (props) => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const handleSidebarToggle = (active) => {
        setIsSidebarActive(active);
    }

    return (
        <BaseStyle isSidebarActive={isSidebarActive}>
            <div id="header">
                <Header onSidebarToggle={handleSidebarToggle} />
            </div>
            <div id="container">
                <h1>
                    <span>
                        {props.titulo}
                    </span>
                </h1>

                {props.children}
            </div>
        </BaseStyle>
    )
}

export default Base;
