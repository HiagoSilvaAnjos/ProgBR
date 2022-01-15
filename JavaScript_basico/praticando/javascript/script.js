// criar arrays que vão receber as notas

let notas1 = [];
let notas2 = [];

// Aqui o usuário vai digitar sua primeira nota em cada matéria
let notaMat1 = Number(prompt("Digite sua primeira nota em Matemática: "));
let notaPor1 = Number(prompt("Digite sua primeira nota em Português: "));
let notaGeo1 = Number(prompt("Digite sua primeira nota em Geografia: "));
let notaFis1 = Number(prompt("Digite sua primeira nota em Física: "));

// Aqui o usuário vai digitar sua segunda nota em cada matéria
let notaMat2 = Number(prompt("Digite sua segunda nota em Matemática: "));
let notaPor2 = Number(prompt("Digite sua segunda nota em Português: "));
let notaGeo2 = Number(prompt("Digite sua segunda nota em Geografia: "));
let notaFis2 = Number(prompt("Digite sua segunda nota em Física: "));

// Aqui os resultados da primeira nota serão "empurrados para o array notas1"
notas1.push(notaMat1);
notas1.push(notaPor1);
notas1.push(notaGeo1);
notas1.push(notaFis1);

// Aqui os resultados da primeira nota serão "empurrados para o array notas2"
notas2.push(notaMat2);
notas2.push(notaPor2);
notas2.push(notaGeo2);
notas2.push(notaFis2);

// Um alerta que irá imprimir as duas notas em cada matéria
alert(
    "Suas notas foram:\n" +
    "Matemática: " +
    notaMat1 +
    " | " +
    notaMat2 +
    "\n" +
    "Português: " +
    notaPor1 +
    " | " +
    notaPor2 +
    "\n" +
    "Geografia: " +
    notaGeo1 +
    " | " +
    notaGeo2 +
    "\n" +
    "Física: " +
    notaFis1 +
    " | " +
    notaFis2
);

alert("Para passar você precisa de uma média maior ou igual a 10");

// Criar uma função que vai pegar todas essas notas, somar todas elas e dividir por 4 obtendo sua média geral
function calcMedia(array1, array2) {
    let soma1 = 0;
    let soma2 = 0;
    let media = 0;

    for (var pegarNota1 of notas1) {
        soma1 += pegarNota1;
    }

    for (var pegarNota2 of notas2) {
        soma2 += pegarNota2;
    }

    media = (soma1 + soma2) / 4;

    var conceito = "";

    if (media >= 20) {

        conceito = "Passou";

    }
    else {
        conceito = "REPROVOU";
    }

    alert("Sua média total foi " + media);

    switch (conceito) {
        case "Passou":
            alert("Conseguiu passar, parabens")
            break;

        case "REPROVOU":
            alert("Que pena... tente novamente ano que vem")
            break;

        default:
            alert("Algo de errado não está certo!")
    }


}

// Executar função e torcer para funcionar

calcMedia(notas1, notas2);