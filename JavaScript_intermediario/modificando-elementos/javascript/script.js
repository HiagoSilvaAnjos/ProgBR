var h = document.getElementsByTagName("h1");

for (let i of h) {
    i.style.color = "white",
    i.style.fontFamily = "Arial",
    i.style.textAlign = "center",
    i.style.backgroundColor = "blue",
    i.style.padding = "5%"
}



var p = document.getElementsByClassName('paragrafo');

for (let i of p) {
    i.style.backgroundColor = "green"
    i.style.color = "yellow"
    i.style.textAlign = "center"
    i.style.padding = "10px"
    i.style.fontSize = "1.5em"
    i.innerHTML = "<h2>Agora é h2</h2>"
}


let p2 = document.getElementById("p2");
p2.style.backgroundColor = "green"
p2.style.color = "white"
p2.style.textAlign = "center"
p2.style.padding = "10px"
p2.innerHTML = "<h3>Agora é h3</h3>"

/*
O innerHTML vai receber um HTML 

O innertText vai receber um texto que vai ser mostrado na tela

O textContent vai me mostrar tudo que é testo que está dentro do HTML

*/