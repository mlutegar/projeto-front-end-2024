import { SecaoStyle } from "./Style";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ToolTip from "../../ToolTip/ToolTip";

const acessar = "imagens/icons/up-arrow.png";

const Secao = (props) => (
    <SecaoStyle>
        <div className="header">
            <div className="titulo">
                <h1>{props.nome}</h1>
                <ToolTip text={props.info}>
                  <span id="infoButton">
                    <AiOutlineInfoCircle />
                  </span>
                </ToolTip>
            </div>

            <div className="navbar">
                {props.navbar}
            </div>

            {props.pagina === true ?
                <div className="acessarButton">
                    <Link to={props.pai}> <img src={acessar} /> </Link>
                </div>
                : null
            }
        </div>

        <div className="content"> {props.conteudo} </div>
        <div className="footer"> {props.footer} </div>
    </SecaoStyle>
);

export default Secao;
