import { BotaoAvancarVoltarStyle } from "./Style";

const BotaoAvancarVoltar = (props) => (
  <BotaoAvancarVoltarStyle>
    <button onClick={props.voltar} href="#"
       className="previous round">&#8249; Voltar</button>
    <button onClick={props.avancar}
            className="next round">Avançar &#8250;</button>
  </BotaoAvancarVoltarStyle>
)

export default BotaoAvancarVoltar;