// o arrays ele é uma estrutura de dados que pode armazenar vários dados sequenciais

// existe algumas formas de escrever uma arrays, uma delas, é da seguinte maneira

// var alunos = new array();

// console.log(alunos);

// Èssa é uma das maneiras de escrever uma array, usando a palavra rezevada “new array()” Nesse caso não temos nada dentro da array  vamos acrescentar par ver como ele se comporta.

// var alunos = new Array("Felipe", "40", "true", 40);
// console.log(alunos[3]);

// cada elemento dentro do Array precisa ser separado com um virgula, no exemplo aqui  só tem string, mas poderia ter qualquer dado numerto string boolean, todos os tipos de dados dentro

// podemos selecionar um dado especifico para aparecer do array pra isso usamos o seu index ou índice que pode ser acessado colocando dentro de alunos que está no console colchetes e entre parêntese o numero da posição.

// var alunos = new Array("Felipe", "Igor", "Jose", "Marcelo");
// console.log(alunos[0]);

// outra maneira de criar um array é começar  entre colchetes colocando os dados.

// var alunos = ["Felipe", "Igor", "Jose", "Marcelo"];
// console.log(alunos);

// assim é mais uma da forma de criar um array.

// dentro do console tem uma seta que clicando mostra as seguintes informações.

// podemos perceber que ele mostra que o array inicia no zero, só que embaixo mostra Length:4 que é o tamanho do nosso array então ainda podemos adaptar da seguinte maneira.

// var alunos = ["Felipe", "Igor", "Jose", "Marcelo"];
// console.log(alunos.length);

// E assim dentro do console  ele vai mostra só o tamanho do array.

// só que escrever um console com um numero entre colchete pode não ser  vantajoso quando temos um numero muito grande de dados para imprimir, pra isso usamos o “for” combinado com o “array”

// Então podemos combinar da seguinte maneira

// var alunos = ["Felipe", "Igor", "Jose", "Marcelo"];

// for ( var i = 0; i < alunos.length; i++){
//     console.log(alunos[i]);
// }
// Então temos criamos uma variante chamada i que é igual a 0

// e dizemos que se i for menor que alunos.length ( Isso porque  length representa o tamanho da array então é um numero que faz sentido nessa equação de i ser menor que length) i++ ou seja o i vai somar mais um

// e dentro do for no console.log colocamos alunos e entre colchete o i que vai variar, assim os nome aparecera 

// assim se quando eu acrescentar mais nomes do alunos o programa atualizara automaticamente

// e temos uma maneira de simplificar toda essa impressão usando o “in” ou o “of”

// por exemplo

// var alunos = ["Felipe", "Igor", "Jose", "Marcelo", "Paulo"];

// for ( var i in alunos){
    
//     console.log(alunos[i]);
// }
// com o “in” a gente faz com que a gente pegue o index do array e traga pra dentro da variante, “i” assim no console podemos pedir pra que o “i” mostre todo index da variante alunos

// e com o “of”
// var alunos = ["Felipe", "Igor", "Jose", "Marcelo"];

// for ( var aluno of alunos){

//     console.log(aluno);
// }

// já o “of” pega todo elemento do array e tras pra dentro da variante assim a gente não precisa mais usar a variante do array entre colchete, basta a  gente escreve a variante do for que todo elemento ou seja os dados vai aparecer

// var alunos = [
// "Felipe",
// "Igor",
// "Jose",
// "Marcelo",
// "Cláudia"
// ];

// for (var aluno of alunos) {
//     console.log(aluno);
// }