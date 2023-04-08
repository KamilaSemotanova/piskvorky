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
    event.target.disabled = true;
    currentPlayer = 'cross';
    document.querySelector(".game__menuPlayerType").innerHTML = playerCrossElm
  } else {
    event.target.classList.add('board__fieldPlayer--cross');
    event.target.disabled = true;
    currentPlayer = 'circle';
    document.querySelector(".game__menuLeft").innerHTML = playerCircleElm
    document.querySelector(".game__menuPlayerType").innerHTML = playerCircleElm
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', addClass);
