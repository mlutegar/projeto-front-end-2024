import styled from "styled-components";

const ArquivoServicoStyle = styled.article`
    background-color: var(--detalhe);
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    
    #container{
        display: grid;
        height: 100%;
        grid-template-areas:
            "header"
            "body"
        ;
        grid-template-columns: auto;
        grid-template-rows: repeat(2, auto);
        gap: .3rem;
        padding: .3rem;

        #header{
            grid-area: header;
        }
        
        #body{
            display: grid;
            grid-template-areas:
                "a b"
                "c c"
            ;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto;
            justify-items: center;
            
            #img-paciente{
                grid-area: a;
            }

            #img-calibracao{
                grid-area: b;

                .btn-vazio button{
                    width: 1px;
                }
            }

            #relatorio{
                grid-area: c;
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
    
    header{
        color: black;
        font-weight: lighter;
        font-size: 0.7rem;
    }
    
    #salvar button{
        padding: .3rem;
        border-radius: .3rem;
        border: none;
        background-color: green;
        color: white;
        cursor: pointer;
        
        :hover{
            cursor: pointer;
            background-color: darkgreen;
        }
        
        :active{
            background-color: green;
}
    }
    
    .download button{
        padding: 15px;
        border-radius: 10px;
        height: 50px;
        font-weight: bold;
        border: 1px solid #023859;
        background-color: var(--primaria);
        color: white;
        margin: 0 10px;
    }
    
    .download button:hover{
        cursor: pointer;
        background-color: var(--destaque);
    }
    
    .download button:active{
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
    
    

    .icon{
        //style={{ color: 'red', fontSize: '14px', marginRight: '20px' }}
        color: red;
        font-size: 24px;
        margin-right: 20px;
        position: relative;
        top: 2.5px;

        :hover{
            cursor: pointer;
        }

        :active{
            color: darkred;
        }
    }

    .icon-acerto{
        color: green;
        font-size: 24px;
        margin-right: 20px;
        position: relative;
        top: 2.5px;

        :hover{
            cursor: pointer;
        }

        :active{
            color: darkgreen;
        }
    }`

export { ArquivoServicoStyle };
