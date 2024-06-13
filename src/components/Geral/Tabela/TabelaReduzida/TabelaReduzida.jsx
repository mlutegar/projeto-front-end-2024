import { TabelaReduzidaStyle } from "./Style";

const TabelaReduzida = (props) => {
    return (
        <TabelaReduzidaStyle>
            <table>
                <thead>
                <tr>
                    {props.head}
                </tr>
                </thead>
                <tbody>
                {props.linha}
                </tbody>
            </table>
        </TabelaReduzidaStyle>
    )
};

export default TabelaReduzida;