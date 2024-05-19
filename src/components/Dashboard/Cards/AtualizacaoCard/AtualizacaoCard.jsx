import { AtualizacaoCardStyle } from "./Style";

const acessar = "imagens/icons/up-arrow.png"

const AtualizacaoCard = (props) => (
  <AtualizacaoCardStyle>
    <div className="container">
        <div className="icone">
            {props.icone}
            <a>
                <img src={acessar}/>
            </a>
        </div>
        <div className="id">
            {props.id}
        </div>
        <div className="acao">
            {props.acao}
        </div>
        <div className="tempo">
            {props.tempo}
        </div>
        <div className="linha">
            <div></div>
        </div>
    </div>
  </AtualizacaoCardStyle>
)

export default AtualizacaoCard;