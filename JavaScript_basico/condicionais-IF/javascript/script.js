// Condicionais são estruturas que checam uma condição e tomam um determinado caminho dependendo dessa condição
// Se uma coisa for verdade acontece uma coisa e se essa coisa for falsa acontece outra coisa/

var idade = parseInt(prompt("Qual sua idade?"));

if (idade >= 18 && idade <= 35) {
    alert("Pode! \nMas primeiro me mostre a identidade!");
}   
else if (idade > 35 && idade <=70) {
    prompt("Pode! \nQual é o seu pedido?")
}
else if (idade > 70) {
    alert("VAI PRA CASA! VOCÊ NÃO PODE BEBER!")
}
else {
    alert("não pode! \nVolte futuramente...");
}
    