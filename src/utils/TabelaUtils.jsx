// utils.js

export const uploadArquivo = (id, setSolicitacoes) => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const base64 = e.target.result;
            localStorage.setItem(id, base64);
            alert("Arquivo salvo no localStorage!");
        };

        reader.readAsDataURL(file);

        atualizarNomeArquivo(id, setSolicitacoes);
        atualizarStatus(id, setSolicitacoes);
    };
    input.click();
};

export const atualizarNomeArquivo = (id, setSolicitacoes) => {
    setSolicitacoes(prevSolicitacoes =>
        prevSolicitacoes.map(solicitacao =>
            solicitacao.id === id ? { ...solicitacao, relatorio: `relatorio_${id}.pdf` } : solicitacao
        )
    );
};

export const atualizarStatus = (id, setSolicitacoes) => {
    setSolicitacoes(prevSolicitacoes =>
        prevSolicitacoes.map(solicitacao =>
            solicitacao.id === id ? { ...solicitacao, status: "Em andamento" } : solicitacao
        )
    );
};
