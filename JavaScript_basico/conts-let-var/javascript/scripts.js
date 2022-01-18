// Const, let e var
// Uma constante pode ser modificad mas não pode se reatribuida
// O let e a const tem um escopo local, ou seja, uma vez que eu crio eles dentro de um bloco, eles só existem lá, diferente do var que é uma variável global

{

var numero = 4;
let numero2 = 5;
const numero3 = [4];
console.log(numero);
console.log(numero2);
console.log(numero3);
numero3.push(true, "teste", 10);
}

