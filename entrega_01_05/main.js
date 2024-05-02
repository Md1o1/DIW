function solicitarNota(mensagem) {
    var nota;
    do {
        nota = parseFloat(prompt(mensagem));
        if (isNaN(nota)) {
            alert("Por favor, insira um número válido.");
        }
    } while (isNaN(nota));
    return nota;
}
var nota1 = solicitarNota("Insira a primeira nota:");
var nota2 = solicitarNota("Insira a segunda nota:");
var nota3 = solicitarNota("Insira a terceira nota:");
var media = (nota1 + nota2 + nota3) / 3;
alert("A média das três notas é: " + media.toFixed(2));
