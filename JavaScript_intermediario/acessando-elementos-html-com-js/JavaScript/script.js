let parag1 = document.getElementById("p1");
console.log(parag1);
// Aqui vai pegar o parágrafo com o ID "p1"
// O document.getElementById("") vai pegar uma tag de acordo com seu ID
console.log("");


let paragrafos = document.getElementsByClassName("paragrafos");
console.log(paragrafos);

for ( let p of paragrafos ) {
    console.log(p);
}
console.log("");
// Aqui vai pegar todos os parágrafos com a class "paragrafos"
// O document.getElementsByClassName("") vai pegar todas as tags de acordo com sua classe


let th = document.getElementsByTagName("h1");
console.log(th);
// Aqui vai pegar todos os h1 dentro do body
// O document.getElementsByTagName("") vai pegar todas as tags que estiverem dentro do body
//EX: document.getElementsByTagName("p") vai pegar todos os parágrafos do body

for (let i of th) {
    console.log(i);
}