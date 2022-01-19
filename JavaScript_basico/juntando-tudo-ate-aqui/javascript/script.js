// Eu quero uma lista onde eu vou ter os nomes do aluno

var nomes = ["Igor", "Hiago", "Lais", "José", "Mari"];

// separado pela nota1, nota2, e a sua média

var notasA = [5.0, 10.0, 9.0, 7.0, 6.0];
var notasB = [4.0, 10.0, 8.5, 4.0, 8.0];
var notasC = [3.0, 10.0, 10.0, 3.0, 5.0];
var notasD = [1.0, 10.0, 9.5, 2.0, 7.0];

function verificarMedia(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
}

// Dizer se ele foi aprovado ou não

function passou(saberResultado) {
    if (saberResultado >= 5) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

for (var index in nomes) {
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var nota3 = notasC[index];
    var nota4 = notasD[index];
    var suaMedia = verificarMedia(nota1, nota2, nota3, nota4);

    console.log(
        nomes[index] +
        ", Suas notas foram: " +
        nota1 +
        " | " +
        nota2 +
        " | " +
        nota3 +
        " | " +
        nota4 +
        " e sua média foi: " +
        suaMedia +
        "\n" +
        nomes[index] +
        " Você foi " +
        passou(suaMedia)
    );
}

// console.log("A seguir veja suas notas nas seguntes matérias! (Se sua média for menor que 5 você será reprovado!)");
// var materias = ["Matemática", "Portugues", "Quimica", "Física", "Geografia"]
// var notaA = [10, 9, 7, 6, 4];
// var notaB = [10, 9, 8, 6, 4];

// function calcularMedia(n1, n2) {
//     return (n1 + n2) / 2;
// }

// function passou(calcularMedia) {

//     if (calcularMedia == 10) {
//         return "EXCELENTE";
//     }
//     else if (calcularMedia >= 8 && calcularMedia < 10) {
//         return "ÓTIMO";
//     }
//     else if (calcularMedia >= 7 && calcularMedia < 8) {
//         return "BOM";
//     }
//     else if (calcularMedia >= 5 && calcularMedia < 7) {
//         return "REGULAR";
//     }
//     else if (calcularMedia < 5) {
//         return "REPROVADO";
//     }
//     else if (calcularMedia > 10) {
//         console.log("HOUVE UM ERRO!");
//     }
//     else {
//         console.log("Algo de errado não está certo!")
//     }

// }

// for (var index in materias) {

//     var nota1 = notaA[index];
//     var nota2 = notaB[index];
//     var suaMedia = calcularMedia(nota1, nota2);

//     console.log(
//         materias[index]
//         +
//         "!\n"
//         +
//         "Suas notas foram: " +
//         nota1
//         +
//         " | "
//         +
//         nota2
//         +
//         " e sua média foi: "
//         +
//         suaMedia
//         +
//         "\n"
//         +
//         "Em "
//         +
//         materias[index]
//         +
//         ":"
//         +
//         " Você foi "
//         +
//         passou(suaMedia));

// }
