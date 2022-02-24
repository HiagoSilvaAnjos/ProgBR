const handleClickImage = document.querySelector('.handleClick');

let vez = 0;


handleClickImage.addEventListener('click', () => {
    console.log(vez)

    if (vez === 0) {
        handleClickImage.setAttribute('src', './assets/icon-g898501032_640.png');

        vez = 1;
    } else {
        handleClickImage.setAttribute('src', './assets/hand-ga360e4c78_640.png');
        vez = 0;
    }


})


const listElement = document.querySelector(".list");
const num = parseInt(listElement.dataset.num);
console.log();

for (let i = 0; i < num; i++) {
    listElement.innerHTML += `<li>${i}</l1>`;
}