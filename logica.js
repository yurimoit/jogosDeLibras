



function questoes() {
    let listaGabarito = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let listaAltMarcadas = [];
    let questaoAcertadas = 0;
    let questaoErradas = 0;


    let opcao1Selecionada = document.querySelector('input[name="opcoes1"]:checked').value;
    listaAltMarcadas.push(opcao1Selecionada);

    let opcao2Selecionada = document.querySelector('input[name="opcoes2"]:checked').value;
    listaAltMarcadas.push(opcao2Selecionada);

    let opcao3Selecionada = document.querySelector('input[name="opcoes3"]:checked').value;
    listaAltMarcadas.push(opcao3Selecionada);

    let opcao4Selecionada = document.querySelector('input[name="opcoes4"]:checked').value;
    listaAltMarcadas.push(opcao4Selecionada);

    let opcao5Selecionada = document.querySelector('input[name="opcoes5"]:checked').value;
    listaAltMarcadas.push(opcao5Selecionada);

    let opcao6Selecionada = document.querySelector('input[name="opcoes6"]:checked').value;
    listaAltMarcadas.push(opcao6Selecionada);

    let opcao7Selecionada = document.querySelector('input[name="opcoes7"]:checked').value;
    listaAltMarcadas.push(opcao7Selecionada);

    let opcao8Selecionada = document.querySelector('input[name="opcoes8"]:checked').value;
    listaAltMarcadas.push(opcao8Selecionada);





    for (let i = 0; i < listaGabarito.length; i++) {
        if (listaAltMarcadas[i] === listaGabarito[i]) {
            questaoAcertadas++;
        } else {
            questaoErradas++;
        }
    }


    const mensagem = `Questoes acertadas: ${questaoAcertadas} 
    Questoes erradas: ${questaoErradas}`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`resultadojogoLibras.html?mensagem=${mensagemCodificada}`, "_self");
}