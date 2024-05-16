    import styled from "styled-components"

const HeaderStyle = styled.header`
  padding: .4em 2em;
  background-color: var(--background);
  display: flex;
  margin: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: #023859 solid 17px;
    
  img {
    height: 50px;
  }
    
  
  #nav2 a {
    text-align: center;
    padding: 1.5em .5em;
    padding-top: 0.5em;
    margin: 0 .3em;
    min-width: 5em;
    background-color: var(--background);
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
    
    #nav1{
        display: flex;
    }
    
    .hamburguer{
        background: none;
        font-size: 30px;
        width: 60px;
        border: none;
        cursor: pointer;
    }
`



export {HeaderStyle}