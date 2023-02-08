const buttonElement = document.querySelector('#button');

buttonElement.addEventListener('mouseover', () => {
    buttonElement.style.backgroundColor = "blue"
})


buttonElement.addEventListener('mouseout', () => {
    buttonElement.style.backgroundColor = "#fff"
})


let button = document.getElementById('button');
let turn = 0;


const turnValidate = () => {
    if (turn === 0) {
        img.setAttribute('src', './Projeto-Android.png');
        turn = 1;
    } else {
        img.removeAttribute('src', './Projeto-Android.png');
        turn = 0;
    }
}


button.addEventListener('click', () => {
    turnValidate();
})


