import {InfoGeralStyle} from "./Style";

function InfoGeral(props) {
    return <InfoGeralStyle>
        <div className="container">
            <div className="tipo">
                Total
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
    </InfoGeralStyle>;
}

export default InfoGeral;