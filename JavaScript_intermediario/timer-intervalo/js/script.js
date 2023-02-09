const buttonChangeText = document.querySelector('#change-text'); 
const titleHead = document.querySelector('#titleHead');

const changeText = () => {
    console.log("Executado")
    titleHead.innerHTML = "Mudou";
}

buttonChangeText.addEventListener('click', () => {
    setTimeout(changeText, 2000);
})