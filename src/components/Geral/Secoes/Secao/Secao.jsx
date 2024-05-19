import { SecaoStyle } from "./Style";
import {Link} from "react-router-dom";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineInfoCircle} from "react-icons/ai";

const infoImg = "imagens/icons/info.png"
const acessar = "imagens/icons/up-arrow.png"

const Secao = (props) => (
  <SecaoStyle>
        <div className="header">
            <div className="titulo">
                <h1>{props.nome}</h1>
                <span id="infoButton">
                    <AiOutlineInfoCircle />
                </span>
            </div>

            <div className="navbar">
                {props.navbar}
            </div>

            {props.pagina === true ?
                <div className="acessarButton">
                    <Link to={props.pai}> <img src={acessar}/> </Link>
                </div>
                : null
            }
        </div>

                <div className="content"> {props.conteudo} </div>
      <div className="footer"> {props.footer} </div>
  </SecaoStyle>
)

export default Secao;