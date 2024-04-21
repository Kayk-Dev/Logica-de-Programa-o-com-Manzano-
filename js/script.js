document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.menu-list').classList.toggle('active');
  });
  
  function converterCelsiusParaFahrenheit() {
    let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    alert("A temperatura em Fahrenheit é: " + temperaturaFahrenheit.toFixed(2) + " °F");
}

function converterFahrenheitParaCelsius() {
    let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
    let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;
    alert("A temperatura em Celsius é: " + temperaturaCelsius.toFixed(2) + " °C");
}

function calcularVolumeLataOleo() {
    let raioBase = parseFloat(prompt("Digite o raio da base da lata de óleo (em centímetros):"));
    let altura = parseFloat(prompt("Digite a altura da lata de óleo (em centímetros):"));

    const pi = Math.PI;

    let volume = pi * Math.pow(raioBase, 2) * altura;

    alert("O volume da lata de óleo é: " + volume.toFixed(2) + " centímetros cúbicos");
}

function calcularConsumoCombustivel() {
    let tempo = parseFloat(prompt("Digite o tempo gasto na viagem (em horas):"));
    let velocidadeMedia = parseFloat(prompt("Digite a velocidade média durante a viagem (em Km/h):"));

    let distancia = tempo * velocidadeMedia;
    let litrosUsados = distancia / 12;

    alert("Velocidade média: " + velocidadeMedia + " Km/h\n" +
          "Tempo gasto na viagem: " + tempo + " horas\n" +
          "Distância percorrida: " + distancia.toFixed(2) + " Km\n" +
          "Quantidade de litros de combustível utilizada: " + litrosUsados.toFixed(2) + " litros");
}

function calcularPrestacaoAtraso() {
    let valor = parseFloat(prompt("Digite o valor da prestação:"));
    let taxa = parseFloat(prompt("Digite a taxa de juros (em porcentagem):"));
    let tempo = parseFloat(prompt("Digite o tempo de atraso (em meses):"));

    let prestacao = valor + (valor * taxa / 100) * tempo;

    alert("O valor da prestação em atraso é: R$" + prestacao.toFixed(2));
}

function trocarValores() {
    let A = prompt("Digite o valor da variável A:");
    let B = prompt("Digite o valor da variável B:");

    let temp = A;
    A = B;
    B = temp;

    alert("Após a troca, o valor de A é: " + A + " e o valor de B é: " + B);
}

function operacoesDistributivas() {
    let A = parseInt(prompt("Digite o valor de A:"));
    let B = parseInt(prompt("Digite o valor de B:"));
    let C = parseInt(prompt("Digite o valor de C:"));
    let D = parseInt(prompt("Digite o valor de D:"));

    let resultadoAdicao1 = A + B;
    let resultadoAdicao2 = A + C;
    let resultadoAdicao3 = A + D;
    let resultadoAdicao4 = B + C;
    let resultadoAdicao5 = B + D;
    let resultadoAdicao6 = C + D;

    let resultadoMultiplicacao1 = A * B;
    let resultadoMultiplicacao2 = A * C;
    let resultadoMultiplicacao3 = A * D;
    let resultadoMultiplicacao4 = B * C;
    let resultadoMultiplicacao5 = B * D;
    let resultadoMultiplicacao6 = C * D;

    alert("Resultados das operações de adição:\n" +
          "A + B = " + resultadoAdicao1 + "\n" +
          "A + C = " + resultadoAdicao2 + "\n" +
          "A + D = " + resultadoAdicao3 + "\n" +
          "B + C = " + resultadoAdicao4 + "\n" +
          "B + D = " + resultadoAdicao5 + "\n" +
          "C + D = " + resultadoAdicao6 + "\n\n" +
          "Resultados das operações de multiplicação:\n" +
          "A * B = " + resultadoMultiplicacao1 + "\n" +
          "A * C = " + resultadoMultiplicacao2 + "\n" +
          "A * D = " + resultadoMultiplicacao3 + "\n" +
          "B * C = " + resultadoMultiplicacao4 + "\n" +
          "B * D = " + resultadoMultiplicacao5 + "\n" +
          "C * D = " + resultadoMultiplicacao6);
}

function calcularVolumeCaixa() {
    let comprimento = parseFloat(prompt("Digite o comprimento da caixa (em metros):"));
    let largura = parseFloat(prompt("Digite a largura da caixa (em metros):"));
    let altura = parseFloat(prompt("Digite a altura da caixa (em metros):"));

    let volume = comprimento * largura * altura;

    alert("O volume da caixa retangular é: " + volume.toFixed(2) + " metros cúbicos");
}

function calcularQuadradoDiferenca() {
    let A = parseInt(prompt("Digite o valor de A:"));
    let B = parseInt(prompt("Digite o valor de B:"));

    let diferenca = A - B;
    let quadradoDiferenca = diferenca * diferenca;

    alert("O quadrado da diferença entre A e B é: " + quadradoDiferenca);
}

function converterDolarParaReal() {
    let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar (em reais):"));
    let quantidadeDolares = parseFloat(prompt("Digite a quantidade de dólares:"));

    let valorEmReais = cotacaoDolar * quantidadeDolares;

    alert("O valor em reais é: R$" + valorEmReais.toFixed(2));
}

function converterRealParaDolar() {
    let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar (em reais):"));
    let quantidadeReais = parseFloat(prompt("Digite a quantidade de reais:"));

    let valorEmDolares = quantidadeReais / cotacaoDolar;

    alert("O valor em dólares é: $" + valorEmDolares.toFixed(2));
}

function somaQuadrados() {
    let A = parseFloat(prompt("Digite o valor de A:"));
    let B = parseFloat(prompt("Digite o valor de B:"));
    let C = parseFloat(prompt("Digite o valor de C:"));

    let soma = Math.pow(A, 2) + Math.pow(B, 2) + Math.pow(C, 2);

    alert("A soma dos quadrados dos três valores é: " + soma);
}

function quadradoDaSoma() {
    let A = parseFloat(prompt("Digite o valor de A:"));
    let B = parseFloat(prompt("Digite o valor de B:"));
    let C = parseFloat(prompt("Digite o valor de C:"));

    let soma = A + B + C;
    let quadradoSoma = Math.pow(soma, 2);

    alert("O quadrado da soma dos três valores é: " + quadradoSoma);
}