import {SolicitacaoCardStyle} from "./Style";
import {Link} from "react-router-dom";

const SolicitacaoCard = (props) => (
    <SolicitacaoCardStyle>
        <div id='navbar'>
            <Link to={props.link}>
                <button className="button">Acessar</button>
            </Link>
        </div>
        <div id='tipo'>
            <span>ID: {props.id}</span>
            <span>User: {props.cliente}</span>
            <span>Data: {props.data}</span>
        </div>
    </SolicitacaoCardStyle>
);

export default SolicitacaoCard;