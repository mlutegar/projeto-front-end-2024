import React from 'react';
import SolicitacaoDetalhadaCard from "../SolicitacaoCard/SolicitacaoDetalhadaCard/SolicitacaoDetalhadaCard";
import {SolicitacoesCardListStyle} from "./Style";


const SolicitacoesCardList = ({ displayedSolicitacoes }) => (
        <SolicitacoesCardListStyle>
            {displayedSolicitacoes.map((solicitacao, index) => (
                <SolicitacaoDetalhadaCard
                    key={index}
                    link={"/servico/" + solicitacao.id}
                    id={
                        solicitacao.status === "Pendente" ? "Pendente" :
                            solicitacao.status === "Em andamento" ? "Em andamento" :
                                solicitacao.status === "Concluído" ? "Concluído" :
                                    solicitacao.status === "Não iniciado" ? "Não iniciado" :
                                        solicitacao.status === "Imagens de pacientes erradas, enviar novamente" ? "Imagens erradas" :
                                            solicitacao.status === "Imagens de calibração errada, enviar novamente" ? "Calibração errada" :
                                                solicitacao.status === "Calculo em processo" ? "Aguardando Relatório" : solicitacao.status
                    }
                    cliente={solicitacao.cliente}
                    data={solicitacao.date}
                />
            ))}
        </SolicitacoesCardListStyle>
    );

export default SolicitacoesCardList;
