let mudarElement = document.getElementById('chamarFunção');
let modificarElement = document.querySelector('.container');

let estado = "sim"
mudarElement.addEventListener('click', () => {

    if (estado === "sim") {
        modificarElement.removeAttribute('class');
        modificarElement.setAttribute('class', 'newAtributesDiv');
        modificarElement.children[0].innerText = 'Novo estilo';
        estado = "nao";
    } else {
        modificarElement.removeAttribute('class');
        modificarElement.setAttribute('class', 'container');
        modificarElement.children[0].innerText = 'Título';
        estado = "sim"
    }
})