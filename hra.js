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
    setTimeout(() => {
      alert('Vyhrálo kolečko! 🎉');
      location.reload();
    }, 200);
  } else if (winner === 'x') {
    setTimeout(() => {
      alert('Vyhrál křížek! 🎉');
      location.reload();
    }, 200);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('Hra skončila nerozhodně.');
      location.reload();
    }, 200);
  }
};

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__fieldPlayer--circle');
    document.querySelector('.game__menuPlayerType').innerHTML = playerCrossElm;

    const buttonArrayElm = Array.from(allButtonsElm).map(conditionForValue);

    const winner = findWinner(buttonArrayElm);
    conditionForWin(winner);

    fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board: buttonArrayElm,
        player: 'x',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { x, y } = data.position;
        const placement = x + y * 10;
        allButtonsElm[placement].click();
      });

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
