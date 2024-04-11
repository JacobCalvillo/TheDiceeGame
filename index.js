function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }


function changeImg() {
    let randomNumber1 = getRandomInt(1,6);
    let randomNumber2 = getRandomInt(1,6);
    document.querySelector('.dice1').setAttribute('src', `./images/dice${randomNumber1}.png`);
    document.querySelector('.dice2').setAttribute('src', `./images/dice${randomNumber2}.png`);

    let title = document.querySelector('.title');
    if (randomNumber1 > randomNumber2) {
        title.textContent = 'PLAYER 1 WINS';
    } else if (randomNumber2 === randomNumber1 ) {
        title.textContent = 'DRAW!!!!';
    } else {
        title.textContent = 'PLAYER 2 WINS';
    }

}

