import styled from "styled-components";

const AtualizacaoCardStyle = styled.article`
    .container{
        padding: .5rem;
        display: grid;
        grid-template-areas:
            "icone id    linha"
            ".     acao  linha"
            ".     tempo linha"
        ;
        grid-template-columns: .1fr 1fr .3fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 1px;
        background-color: white;
        border-radius: 20px;
    }
    
    .icone{
        grid-area: icone;
        border-radius: 50%;
        background-color: var(--detalhe);
    }
    
    .icone img{
        padding: 5px;
        height: 10px;
    }
    
    .id{
        grid-area: id;
    }
    
    .acao{
        grid-area: acao;
    }
    
    .tempo{
        grid-area: tempo;
    }
    
    .id, .acao, .tempo{
        margin-left: 5px;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    
    .linha{
        margin-left: 2rem;
        grid-area: linha;
        border-left: 5px solid #023859FF;
    }
`;

export {AtualizacaoCardStyle};