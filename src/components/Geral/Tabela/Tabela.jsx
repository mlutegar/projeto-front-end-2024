import { TabelaEstilo } from "./Style";

const Tabela = (props) => {
    return (
        <TabelaEstilo>
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
        </TabelaEstilo>
    )
};

export default Tabela;
