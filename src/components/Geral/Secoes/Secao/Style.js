import styled from "styled-components";

const SecaoStyle = styled.article`
    display: grid;
    grid-template-areas:
        "header"
        "content"
        "footer";
    grid-template-rows: .2fr 1fr .2fr;
    background-color: var(--detalhe);
    border-radius: 3rem;
    height: 100%;
    color: var(--secundaria);
    text-align: center;
    font-size: larger;
    font-weight: bold;
    
    .header {
        grid-area: header;
    }
    
    .content {
        grid-area: content;
        padding: 1rem;
    }
    
    .footer {
        grid-area: footer;
        display: flex;
        justify-content: center;
    }

    #infoButton{
        cursor: pointer;
        margin-left: 10px;
    }
    
    #infoButton svg{
        color: var(--secundaria);
        font-size: 1.5rem;
    }
    
    img{
        height: 30px;
    }
    
    div.header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        margin-left: 3em;
        margin-right: 3em;
    }
    
    div.nav1{
        display: flex;
    }
    
    div.nav1 h1{
        border-bottom: var(--primaria) solid 4px;
    }
    
    div.header button {
        border-radius: 15px;
        height: 50px;
        background-color: var(--primaria);
        color: #fff;
        border: none;
        cursor: pointer;
    }
    
    div.header button:hover {
        background-color: #0056b3;
    }
    
    div.header button:active {
        background-color: #004380;
    }
    
    div.content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export {SecaoStyle};