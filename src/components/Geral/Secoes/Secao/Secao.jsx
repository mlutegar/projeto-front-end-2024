import { SecaoStyle } from "./Style";
import {Link} from "react-router-dom";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineInfoCircle} from "react-icons/ai";

const infoImg = "imagens/icons/info.png"
const acessar = "imagens/icons/up-arrow.png"

const Secao = (props) => (
  <SecaoStyle>
    <div className="secao">
        <div className="header">
            <div className="nav1">
                <h1>{props.nome}</h1>
                <span id="infoButton">
                    <AiOutlineInfoCircle />
                </span>
            </div>

            {props.navbar}

            <Link className="acessarButton" to={props.pai}>
                <img src={acessar}/>
            </Link>
        </div>
        <div className="content">
            {props.conteudo}
        </div>
    </div>
  </SecaoStyle>
)

export default Secao;