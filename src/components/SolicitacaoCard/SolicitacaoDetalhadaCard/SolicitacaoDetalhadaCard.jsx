import SolicitacaoCard from "../SolicitacaoCard";
import {SolicitacaoDetalhadaCardStyle} from "./Style";

const SolcitacaoDetalhadaCard = (props) => (
    <SolicitacaoDetalhadaCardStyle>
        <SolicitacaoCard {...props} />
    </SolicitacaoDetalhadaCardStyle>
)

export default SolcitacaoDetalhadaCard;