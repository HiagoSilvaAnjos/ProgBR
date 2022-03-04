let contemTitulo = document.querySelectorAll('[title]');

for (let i of contemTitulo) {
    console.log(i);
}
console.log('outra linha')

let contemPalavraTitulo = document.querySelectorAll('[title~="titulo"]');

for (let i of contemPalavraTitulo) {
    console.log(i);
}
console.log('outra linha')

let AtributoComPrimeiraLetra = document.querySelectorAll('[title^="t"]');

for (let i of AtributoComPrimeiraLetra) {
    console.log(i);
}
console.log('outra linha')

let AtributoComUltimaLetra = document.querySelectorAll('[title$="1"]');

for (let i of AtributoComUltimaLetra) {
    console.log(i);
}
console.log('outra linha')

let todoAtributoComMesmaPalavra = document.querySelectorAll('[title*="paragrafo"]');

for (let i of todoAtributoComMesmaPalavra) {
    console.log(i);
}