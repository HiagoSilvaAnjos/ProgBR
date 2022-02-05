console.log('Hellow, World');

// localStorage.setItem("Nome", "Igor");
localStorage.setItem("Nome", "Hiago");
// localStorage.removeItem("Nome");

let n = localStorage.getItem("Nome")
console.log(n)


onload = function() {

    let nomeElement = localStorage.getItem("content")

    let span = document.getElementById('content');
    span.innerHTML = nomeElement

    span.style.display = 'block';
    span.style.color = '#FFF';
    span.style.borderRadius = '4px'
    span.style.padding = '10px'
    span.style.background = 'crimson'
    span.style.fontSize = '2em'
    span.style.fontFamily = 'sans-serif'
    span.style.fontWeight = 'bold'
    

}


function atualizar(elemento) {
    let valor = elemento.value;
    console.log(valor);


    let span = document.getElementById('content');
    span.style.display = 'block';
    span.style.color = '#FFF';
    span.style.borderRadius = '4px'
    span.style.padding = '10px'
    span.style.background = 'crimson'
    span.style.fontSize = '2em'
    span.style.fontFamily = 'sans-serif'
    span.style.fontWeight = 'bold'
    span.innerHTML = valor;


    localStorage.setItem('content', valor);

}




/*
localStorage.setItem() Precia passar dois argumentos
1- Key = Chave do meu elmento
2 String Value = Passar o elemento que deve ser armazenado

EX: localStorage.setItem("Nome", "Igor")


localStorage.getItem()
Precia passar um argumento
1- Key = Passar a chave do elemento armazenado para ser "pegado"

EX: localStorage.getItem("Nome")

localStorage.removeItem()
Precia passar um argumento
1- Key = Passar a chave do elemento armazenado para ser removido

EX: localStorage.removeItem("Nome")

localStorage.clear()
Limpa tudo que tiver na memória 

*/