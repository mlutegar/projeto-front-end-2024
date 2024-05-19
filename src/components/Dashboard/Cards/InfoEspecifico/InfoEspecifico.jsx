import {InfoEspecificoStyle} from "./Style";

function InfoEspecifico(props) {
    return <InfoEspecificoStyle>
        <div className="container">
            <div className="tipo">
                {props.solicitacoes[props.index].tipo}
            </div>

            <div className="info">
                <div className="num">
                    <span>{props.solicitacoes[props.index].aberto + props.solicitacoes[props.index].fechado}</span>
                    <div></div>
                    Total
                </div>
                <div className="num">
                    <span>{props.solicitacoes[props.index].aberto}</span>
                    <div id="circulo-laranja"></div>
                    Pedidos Abertos
                </div>
                <div className="num">
                    <span>{props.solicitacoes[props.index].fechado}</span>
                    <div id="circulo-verde"></div>
                    Pedidos Fechados
                </div>
            </div>
        </div>
    </InfoEspecificoStyle>;
}

export default InfoEspecifico;