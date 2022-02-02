let caixaElement = document.getElementById('d1');
let segundaCaixaElement = document.getElementById('d2');

let h1 = caixaElement.children[0];

console.log(h1);
console.log(h1.parentElement)

console.log(caixaElement.children[1]);

console.log('');
console.log(segundaCaixaElement.children[0]);
console.log(segundaCaixaElement.children[1]);


let arrayH1 = document.getElementsByTagName('h1');

for (let i of arrayH1) {
    console.log(i);

    i.addEventListener('click', (e) => {
        let t = e.target;
        console.log(t.parentElement);
    })

}



// mostrar qual elemento foi clicado em toda página



let body = document.querySelector("#body");

body.addEventListener("click", (e) => {
    let t = e.target;

    alert(`Você clicou em <${t.tagName.toUpperCase()}>`)

})