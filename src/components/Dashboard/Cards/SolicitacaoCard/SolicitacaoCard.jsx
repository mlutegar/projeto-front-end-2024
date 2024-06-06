import {SolicitacaoCardStyle} from "./Style";
import {Link} from "react-router-dom";
import {AiOutlineCalendar, AiOutlineKey, AiOutlineUser} from "react-icons/ai";

const SolicitacaoCard = (props) => (
    <SolicitacaoCardStyle>
        <div id='navbar'>
            <Link to={props.link}>
                <button className="button">Acessar</button>
            </Link>
        </div>
        <div id='tipo'>
            <span>{props.id}</span>
            <span><AiOutlineUser /> {props.cliente}</span>
            <span><AiOutlineCalendar /> {props.data}</span>
        </div>
    </SolicitacaoCardStyle>
);

export default SolicitacaoCard;