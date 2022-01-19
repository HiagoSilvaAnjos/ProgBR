
// Meu exemplo 
// Uma função que come determinados pedaços de pizza
console.log("Uma função que come determinados pedaços de pizza");

function comerPizza(numeroDefatias) {
    for (fatiasComidas = 0; fatiasComidas <= numeroDefatias; fatiasComidas++) {

        console.log("Você comeu " + fatiasComidas + " fatias" + "\nRestam " + (numeroDefatias - fatiasComidas) + " fatias")

    }

    console.log("Você comeu toda a pizza!")
}


comerPizza(10);

// Mesma função agora utilizando o for
console.log("");
console.log("Mesma função agora utilizando o for")

function comerPizza2(numeroDefatias, fatiasComidas) {

    var tamanhoPizza = numeroDefatias;
    var fatiaComsumida = fatiasComidas;

    while (fatiaComsumida <= tamanhoPizza) {

        console.log("Você comeu " + fatiaComsumida + " fatias" + "\nRestam " + (tamanhoPizza - fatiaComsumida) + " fatias");
        fatiaComsumida++;

    }
    console.log("Você comeu toda a pizza!");

}

comerPizza2(10, 0);



// Exemplo feito na aula
console.log("");
console.log("Exemplo feito na aula");

function media(n1, n2) {
    var nota1 = n1; 
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;

    return media;
}

var resultado1 = media(6, 7);
var resultado2 = media(8, 7);

console.log(resultado1 + " E " + resultado2);


// Peguei o mesmo exemplo da aula mais agora adicionei o prompt e o alert

// function calcMedia(n1, n2){
//     var nota1= n1
//     var nota2= n2
//     var media= (nota1 + nota2)/2
//     alert("Sua média é "+ media.toFixed(1))
    
//     if (media >= 9) {
//             alert("Parabens, você foi ótimo!")
//     }
//     else if (media >= 6){
//             alert("Seu desempenho foi regular. Estude mais da próxima vez!")
//     }
//     else{
//             alert("Seu desempenho infelizmente foi insatisfatório!")
//     }
    
//     }
    
//     calcMedia(
//     parseInt(prompt("Digite sua 1ª nota!")),
//     parseInt(prompt("Digite sua 2ª nota!"))
//     )