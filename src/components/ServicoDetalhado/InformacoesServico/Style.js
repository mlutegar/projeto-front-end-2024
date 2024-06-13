import styled from "styled-components";

const InformacoesServicoStyle = styled.article`
    background-color: var(--detalhe);
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    
    #container{
        display: grid;
        grid-template-areas:
            "header"
            "body"
            "footer"
        ;
        grid-template-columns: auto;
        grid-template-rows: repeat(3,auto);
        gap: .3rem;
        padding: .3rem;

        #footer{
            grid-area: footer;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #header{
            grid-area: header;
        }
        
        #body{
            grid-area: body;
            margin-top: 2rem;
            display: grid;
            grid-template-areas:
                "item2 item3"
                "item4 item5"
                "item6 item7"
            ;
            grid-template-columns: repeat(2,auto);
            grid-template-rows: repeat(3,auto);
            gap: .3rem;
            padding: .3rem;
            text-align: center;
            
            #item2{
                grid-area: item2;
            }
            
            #item3{
                grid-area: item3;
            }
            
            #item4{
                grid-area: item4;
            }
            
            #item5{
                grid-area: item5;
            }
            
            #item6{
                grid-area: item6;
            }
            
            #item7{
                grid-area: item7;
            }
        }
    }
    
    label{
        display: block;
    }
    
    
    label{
        font-weight: bold;
        color: black;
    }
    
    input{
        margin-top: 5px;
        width: 70%;
        padding: .3rem;
        border-radius: .3rem;
        border: 1px solid #ccc;
    }
    
    select{
        margin-top: 5px;
        width: 70%;
        padding: .3rem;
        border-radius: .3rem;
        border: 1px solid #ccc;
    }
    
    input[type="checkbox"]{
        width: auto;
    }
    
    button{
        padding: .3rem;
        width: 100px;
        border-radius: .3rem;
        border: none;
        background-color: green;
        color: white;
        cursor: pointer;
    }
    
    button:hover{
        background-color: darkgreen;
    }
    
    button:active{
        background-color: green;
    }
    
    #circulo{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: var(--primaria);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
    }
    
    #linha-azul{
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--primaria);
    }
    

    
    #titulo{
        display: flex;
        align-items: baseline;
    }
    
    
`

export { InformacoesServicoStyle };
