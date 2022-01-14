alert("A seguir digite sua nota nas seguntes matérias!");
var notaMat = parseFloat(prompt("Matemática:"));
var notaPor = parseFloat(prompt("Português:"));
var notaQui = parseFloat(prompt("Química:"));
var notaFis = parseFloat(prompt("Física:"));
var conceito = "";


alert("Suas notas foram as seguintes: \nMatemática: " + notaMat + "\nPortuguês: " + notaPor + "\nQuímica: " + notaQui + "\nFisica: " + notaFis);

if (notaMat == 0 || notaPor == 0 && notaQui == 0 || notaFis == 0) {
    alert("REPROVADO AUTOMÁTICAMENTE! \nVocê tirou zero em uma ou mais matérias!");
}
else {
    alert("Bom dia!, veja sua média:");
}

var soma = notaMat + notaPor + notaQui + notaFis;
var media = soma / 4;



if (media == 10) {
   conceito = "EXCELENTE";
}
else if (media >= 8 && media < 10) {
    conceito = "ÓTIMO";
}
else if (media >= 7 && media < 8) {
    conceito = "BOM";
}
else if (media >= 5 && media < 7) {
    conceito = "REGULAR";
}
else if (media > 10) {
    alert("HOUVE UM ERRO!");
}
else if (media < 5) {
    conceito = "REPROVADO";
}
else {
    alert("Algo de errado não está certo!")
}

alert("Sua média foi " + media + " !");

switch (conceito) {
    case "EXCELENTE":

        alert(conceito + "!" + "\nParabens!!!, você é um ótimo aluno");
        break

    case "ÓTIMO":

        alert(conceito + "!" + "\nQue legal!, continue assim!");
        break

    case "BOM":

        alert(conceito + "!" + "\nVocê está indo muito bem!");
        break

    case "REGULAR":

        alert(conceito + "!" + "\nVocê deve prestar mais atenção e melhorar na próxima");
        break

    case "RUIM":

        alert(conceito + "!" + "\nVOCÊ DEVE ESTUDAR MAIS!!!");
        break

    case "REPROVADO":

        alert("Sua média foi menor que 5.0\nVOCÊ NÃO PASSOU");
        break

    default:

        alert("Ocorreu um erro inesperado! \nReveja suas notas");
        break

}

console.log("Média: " + media);
console.log("Você foi: " + conceito);