document.getElementById('criptografar').addEventListener('click', function() {
    let texto = document.getElementById('mensagem').value;
    let resultado = criptografar(texto);
    if (resultado) {
        exibirResultado(resultado);
    }
});

document.getElementById('descriptografar').addEventListener('click', function() {
    let texto = document.getElementById('mensagem').value;
    let resultado = descriptografar(texto);
    if (resultado) {
        exibirResultado(resultado);
    }
});

document.getElementById('copiar').addEventListener('click', function() {
    copiarTexto();
});

function criptografar(texto) {
    if (!validarTexto(texto)) {
        alert("Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.");
        return "";
    }
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

function descriptografar(texto) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function exibirResultado(mensagem) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.add('result-active');
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`;
}


function copiarTexto() {
    let textoParaCopiar = document.getElementById('resultado').innerText;
    if (textoParaCopiar) {
        navigator.clipboard.writeText(textoParaCopiar).then(() => {
            alert("Texto copiado para a área de transferência!");
        }).catch(err => {
            alert("Falha ao copiar o texto: " + err);
        });
    } else {
        alert("Nenhum texto disponível para copiar!");
    }
}
