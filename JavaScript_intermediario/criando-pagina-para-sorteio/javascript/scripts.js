const resultWinnerElement = document.querySelector('.result-winner');
const randomWinnerElement = document.querySelector('.random-winner');

let people = ["Leo", "John", "Igor", "Bob", "Hiago"];

randomWinnerElement.addEventListener('click', () => {
    
    let lengthPeople = people.length;

    let calcWinner = Math.floor(Math.random() * lengthPeople);

    console.log(calcWinner)

    resultWinnerElement.style.fontFamily = 'sans-serif'
    resultWinnerElement.innerText = `O ganhador foi ${people[calcWinner]}`

})