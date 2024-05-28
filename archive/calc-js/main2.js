var operacao;
var operacoesValidas = ["soma", "subtração", "multiplicação", "divisão"];
do {
    operacao = prompt("Escolha uma operação: soma, subtração, multiplicação ou divisão");
    if (!operacoesValidas.includes(operacao.toLowerCase())) {
        alert("Operação inválida. Por favor, escolha uma operação válida.");
    }
} while (!operacoesValidas.includes(operacao.toLowerCase()));

var numero1, numero2;
do {
    numero1 = parseFloat(prompt("Insira o primeiro número:"));
    if (isNaN(numero1)) {
        alert("Por favor, insira um valor válido para o primeiro número.");
    }

} while (isNaN(numero1));
do {
    numero2 = parseFloat(prompt("Insira o segundo número:"));
    if (isNaN(numero2)) {
        alert("Por favor, insira um valor válido para o segundo número.");
    }
} while (isNaN(numero2));

var resultado;
switch (operacao.toLowerCase()) {
    case "soma":
        resultado = numero1 + numero2;
        break;
    case "subtração":
        resultado = numero1 - numero2;
        break;
    case "multiplicação":
        resultado = numero1 * numero2;
        break;
    case "divisão":
        if (numero2 === 0) {
            alert("Não é possível dividir por zero.");
        } else {
            resultado = numero1 / numero2;
        }
        break;
}

if (resultado !== undefined) {
    alert("O resultado da operação " + operacao + " é: " + resultado);
}

