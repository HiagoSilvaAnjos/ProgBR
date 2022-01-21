function saudaçao() {
    return ("Olá, Mundo!");
}


console.log(saudaçao()); // AQUI VAI IMPRIMIR O RESULTADO DA FUNÇÃO SAUDAÇÃO


var s = saudaçao;   // AQUI A VARIÁVEL S RECEBE A PRÓPRIA FUNÇÃO POR INTEIRA, OU SEJA, SE EU MANDAR  EXECUTAR A VARIÁVEL S A FUNÇÃO VAI MOSTRAR NA TELA O RESULTADO.


console.log(s())

console.log("");
console.log("Exemplo 1 função");
console.log("");

function calcMedia(n1, n2) {
    let nota1 = n1;
    let nota2 = n2;
    let media = (nota1 + nota2) / 2;

    return ("Sua média foi " + media);;
}

console.log(calcMedia(9, 7));


console.log("");
console.log("Exemplo 2 função(arrow function)");
console.log("");

let media = (n1, n2) => {
    return (n1 + n2) / 2;
    
}

console.log("Sua média foi: " +media(10, 10));