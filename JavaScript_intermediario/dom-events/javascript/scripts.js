function change(i) {

    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerText = i.value

}

// esconder a div

let caixa = document.getElementById('executar');

caixa.addEventListener("click", () => {
    let div = document.getElementById('caixa')
    div.style.display = "none"
})

// mostrar a div

let mostrarCaixa = document.getElementById('voltar');

mostrarCaixa.addEventListener("click", () => {
    let div = document.getElementById('caixa')
    div.style.display = "block"
})


// mudar a cor de fundo da div para Vermelho

let red = document.getElementById('red');

red.addEventListener("click", () => {
    let div = document.getElementById('caixa')
    div.style.backgroundColor = "red";
})

// mudar a cor de fundo da div para Amarelo

let yellow = document.getElementById('yellow');

yellow.addEventListener("click", () => {
    let div = document.getElementById('caixa')
    div.style.backgroundColor = "yellow";
})

// mudar a cor de fundo da div para verde

let green = document.getElementById('green');

green.addEventListener("click", () => {
    let div = document.getElementById('caixa')
    div.style.backgroundColor = "green";
})

// mudar a cor de fundo da div para branco

let padrao = document.getElementById('padrao');

padrao.addEventListener("click", () => {
    let div = document.getElementById('caixa')
    div.style.backgroundColor = "white";
})

