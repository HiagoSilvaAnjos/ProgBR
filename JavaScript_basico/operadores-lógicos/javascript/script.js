console.log("&& e")

// && e (ele compara dois valores booleanos, se ambos forem verdadeiro ele retorna true e qualquer coisa diferente disso ele retorna false.)
// Exemplo:

var idade = 20;
var maior20 = idade >= 20;
var menor30 = idade <= 30;
var entre = maior20 && menor30; // Aqui ele vai comparar as variáveis! Se ambas forem verdadeiras ele deve retornar true e se uma ou as duas forem falsas ele retorna false.

console.log("Idade:", idade, "anos");

console.log("Sua idade é maior ou igual a Vinte?", maior20);

console.log("Sua idade é menor ou igual a Trinta?", menor30);

console.log("Sua idade está entre 20 e 30?", entre);


console.log("");
// MESMO EXEMPLO ACIMA MAIS AGORA UTILIZANDO FUNÇÃO E CONDICIONAIS
console.log("MESMO EXEMPLO ACIMA MAIS AGORA UTILIZANDO FUNÇÃO E CONDICIONAIS");

function calcIdade (idade) {
    this.suaIdade = idade;

    console.log("Idade:", this.suaIdade, "anos");

    if (this.suaIdade >= 20) {
        console.log("Sua idade é maior ou igual a Vinte!");
    } else if (this.suaIdade <= 30) {
        console.log("Sua idade é menor ou igual a 30!"); 
    } else {
        console.log("ERROR");
    }

    console.log("Sua idade está entre 20 e 30 anos? " + (this.suaIdade >= 20 && this.suaIdade <= 30 ? "Sim!" : "Não!"));

    return calcIdade;
}

calcIdade(50);


console.log("");




console.log("|| ou")
// || ou (Ele compara os valores booleanos, se um ou todos os valores forem verdadeiro ele retorna true, ele so retornaria false se todos os valores fossem falsos)
// Exemplo:

var outraIdade = 7;

var menor10 = outraIdade <= 10;
var maior65 = outraIdade >= 65;

var gratuidade = menor10 || maior65; // Aqui ele vai comparar as variáveis! Se uma ou ambas forem verdadeiras ele deve retornar true e se todas forem falsas ele retorna false.

console.log("Sua idade:", outraIdade, "anos");

console.log("Idade maior ou igual a 65", maior65);

console.log("Idade menor ou igual a 10", menor10);

console.log("Tem direito a gratuidade?", gratuidade);


console.log("");
// MESMO EXEMPLO ACIMA MAIS AGORA UTILIZANDO FUNÇÃO E CONDICIONAIS
console.log("MESMO EXEMPLO ACIMA MAIS AGORA UTILIZANDO FUNÇÃO E CONDICIONAIS");

function verificarIgualdade(idade) {
    let suaIdade = idade

    console.log("Sua idade:", suaIdade, "anos");

    if (suaIdade <= 10) {
        console.log("Sua idade é menor ou igual a 10!");
    } else if (suaIdade > 10) {
        console.log("Sua idade é maior que 10!");
    } else {
        console.log("ERROR");
    }

    suaIdade <= 10 ? console.log("Tem direito a gratuidade") : console.log("Não tem direito a gratuidade");
}

verificarIgualdade(10);




console.log("");
console.log("! negação")
// Negativo (Só é aplicado à variáveis do tipo booleano e sempre que um valor for verdadeiro o outro passa a ser falso e vice-versa)

var novaIdade = 25;

var maiorIdade20 = novaIdade >= 20;
var menorIdade20 = !maiorIdade20; // Aqui a variável menorIdade20 vai receber a negação da variável maiorIdade20, ou seja, se a variável maiorIdade20 for verdadeira a variável menorIdade20 será falsa e se a variável maiorIdade20 for falsa a variável menorIdade20 será verdadeira

console.log("Maior ou igual a vinte", maiorIdade20);
console.log("Menor que vinte", menorIdade20);