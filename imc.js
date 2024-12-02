function calcularIMC() {
    // Obtém os valores de altura e peso
    const altura = document.getElementById("Altura").value;
    const peso = document.getElementById("Peso").value;
    
    // Verifica se os valores são válidos
    if (altura === "" || peso === "") {
        mostrarResultado("Eu não consigo calcular o vazio insira algo !!.");
        return;
    }

    // Converte altura de cm para metros
    const alturaEmMetros = altura / 100;

    // Calcula o IMC
    const imc = peso / (alturaEmMetros * alturaEmMetros);

    // Formata o resultado com duas casas decimais
    const imcFormatado = imc.toFixed(2.0);

    // Exibe o resultado na tela
    mostrarResultado(`Seu IMC é: ${imcFormatado}`);
}


    // Classifica o IMC e cria uma mensagem apropriada
    
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Você está com peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao ="Você está acima do peso.";
    } else {
        classificacao = "Você está obeso.";
    }

    // Exibe o resultado na tela
    mostrarResultado(`Seu IMC é: ${imcFormatado}. ${classificacao}`);


function mostrarResultado(mensagem) {
    // Seleciona o elemento onde o resultado será exibido
    const resultadoDiv = document.getElementById("resultado");
    
    // Define a mensagem a ser exibida
    resultadoDiv.innerText = mensagem;
}
