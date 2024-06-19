import styled from "styled-components";

const SecaoStyle = styled.article`
    display: grid;
    grid-template-areas:
        "header"
        "content"
        "footer";
    grid-template-rows: auto auto 50px;
    grid-template-columns: auto;
    background-color: var(--detalhe);
    border-radius: 3rem;
    height: 100%;
    color: var(--secundaria);
    text-align: center;
    font-size: larger;
    font-weight: bold;
    flex-wrap: wrap;
    
    .header {
        grid-area: header;
        display: flex;
        flex-wrap: wrap;
        
        justify-content: space-between;
        align-items: baseline;
        margin-top: 2rem;
        margin-left: 3rem;
        margin-right: 3rem;
        
        .navbar{
            display: flex;
            flex-wrap: wrap;
        }
        
        .acessarButton{
            background-color: white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .acessarButton:hover{
            background-color: var(--destaque);
            cursor: pointer;
        }
        
        .acessarButton img{
            height: 20px;
        }
    }
    
    .navbar2{
        display: none;
    }

    .titulo h1{
        font-weight: lighter;
        font-size: 2.5em;
        border-bottom: 3px solid var(--primaria);
    }
    
    .titulo{
        display: flex;
    }
    
    .content {
        grid-area: content;
        margin-bottom: 1rem;
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
        font-size: 2.5rem;
    }
    
    div.header button {
        border-radius: 15px;
        height: 3rem;
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

    @media only screen and (max-width: 1460px) {
        .header{
            .acessarButton{
                display: none;
            }
        }
    }
`;

export {SecaoStyle};