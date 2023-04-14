import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const playerCircleElm = `
<svg width="30" height="30">
  <circle
    cx="18"
    cy="18"
    r="10"
    stroke="white"
    stroke-width="2"
    fill="transparent"
  />
  </svg>`;

const playerCrossElm = `
<svg width="20" height="20" viewBox="0 -3 5 20" overflow="visible" stroke="white" stroke-width="2">
  <line 
    x2="20"
    y2="20"
  />
  <line
    x1="20"
    y2="20"
  />
  </svg>`;

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__fieldPlayer--circle');
    currentPlayer = 'cross';
    document.querySelector('.game__menuPlayerType').innerHTML = playerCrossElm;

    const buttonArrayElm = Array.from(allButtonsElm);
    buttonArrayElm.map(conditionForValue);

    const winner = findWinner(buttonArrayElm);
  } else {
    event.target.classList.add('board__fieldPlayer--cross');
    currentPlayer = 'circle';
    document.querySelector('.game__menuPlayerType').innerHTML = playerCircleElm;

    const buttonArrayElm = Array.from(allButtonsElm);
    buttonArrayElm.map(conditionForValue);
    console.log(buttonArrayElm);

    const winner = findWinner(buttonArrayElm);
  }
  event.target.disabled = true;
};

document
  .querySelector('.game__menuRestart')
  .addEventListener('click', (event) => {
    if (confirm('Opravdu chceš hru restartovat?') === false) {
      event.preventDefault();
    }
  });

const allButtonsElm = document.querySelectorAll('.row button');

allButtonsElm.forEach((eventButton) => {
  eventButton.addEventListener('click', addClass);
});

// Condition for adding value in array

const conditionForValue = (symbol) => {
  if (symbol.classList.contains('board__fieldPlayer--cross')) {
    return 'x';
  } else if (symbol.classList.contains('board__fieldPlayer--circle')) {
    return 'o';
  } else {
    return '_';
  }
};
