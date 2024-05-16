import Header from "../components/Navegacao/Header/Header";
import styled from "styled-components";

const BaseStyle = styled.div`
    display: grid;
    grid-template-areas: 
            "header"
            "container";
    
    #header {
        grid-area: header;
    }
    
    #container {
        grid-area: container;
        padding: 1rem;
        margin: 20px 20px;
    }

    #container h1 span{
        border-bottom: 5px solid var(--primaria);
    }
    
    #container h1 {
        margin-bottom: 1.5rem;
    }
`;


const Base = (props) => (
  <BaseStyle>
      <div id="header">
          <Header />
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

export default Base;
