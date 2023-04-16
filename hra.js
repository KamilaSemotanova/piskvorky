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

// Condition for adding value in array

const conditionForValue = (value) => {
  if (value.classList.contains('board__fieldPlayer--cross')) {
    return 'x';
  } else if (value.classList.contains('board__fieldPlayer--circle')) {
    return 'o';
  } else {
    return '_';
  }
};

const conditionForWin = (winner) => {
  if (winner === 'o') {
    setTimeout(alert('Vyhrálo kolečko!'), 700);
    location.reload();
  } else if (winner === 'x') {
    setTimeout(alert('Vyhrál křížek!'), 700);
    location.reload();
  } else if (winner === "tie") {
    setTimeout(alert('Hra skončila nerozhodně.'), 700);
    location.reload();
  }
};

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__fieldPlayer--circle');
    document.querySelector('.game__menuPlayerType').innerHTML = playerCrossElm;

    const buttonArrayElm = Array.from(allButtonsElm).map(conditionForValue);

    const winner = findWinner(buttonArrayElm);
    conditionForWin(winner);

    currentPlayer = 'cross';
  } else {
    event.target.classList.add('board__fieldPlayer--cross');
    document.querySelector('.game__menuPlayerType').innerHTML = playerCircleElm;

    const buttonArrayElm = Array.from(allButtonsElm).map(conditionForValue);

    const winner = findWinner(buttonArrayElm);
    conditionForWin(winner);

    currentPlayer = 'circle';
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
