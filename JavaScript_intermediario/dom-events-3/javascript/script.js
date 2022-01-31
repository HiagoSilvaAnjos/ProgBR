let mudarElement = document.getElementById('chamarFunção');
let modificarElement  = document.getElementById('itemMod');

 let estado = "sim"
mudarElement.addEventListener('click', () => {
    

   

    if(estado === "sim") {
        modificarElement.style.backgroundColor = "crimson"
        modificarElement.style.color = "white"
        modificarElement.style.padding = "10px"
        modificarElement.style.fontFamily = "arial"
        modificarElement.style.borderRadius = "4px"
        estado = "não"
    } else {
        modificarElement.style.backgroundColor = "blue"
        modificarElement.style.color = "black"
        modificarElement.style.padding = "0px"
        modificarElement.style.fontFamily = "serif"
        modificarElement.style.borderRadius = "0px"
        estado = "sim"
    }
})