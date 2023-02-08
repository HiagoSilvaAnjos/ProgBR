let getInfo = parseInt(prompt(`Tente acertar o número chutado!
Digite um número entre 0 e 10:`))


let random = Math.floor(Math.random() * 10)


if (getInfo > 10 || getInfo < 0) {
    alert(`Por favor! digite um número entre 0 e 10`)
} else if (getInfo === random) {
    alert(`Acertou! Você digitou ${getInfo} e o número que eu gerei foi ${random}`)
} else {
    alert(`Errou o número gerado foi ${random}`)
}






