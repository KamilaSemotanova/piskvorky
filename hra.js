let currentPlayer = 'circle';

const addClass = (event) => {
  event.target.classList.add('board__fieldPlayer--circle');
};

document.querySelector('#buttonInField1').addEventListener('click', (event) => {
  event.target.classList.add('board__fieldPlayer--circle');
});
document.querySelector('#buttonInField2').addEventListener('click', addClass);
document.querySelector('#buttonInField3').addEventListener('click', addClass);
document.querySelector('#buttonInField4').addEventListener('click', addClass);
document.querySelector('#buttonInField5').addEventListener('click', addClass);
document.querySelector('#buttonInField6').addEventListener('click', addClass);
document.querySelector('#buttonInField7').addEventListener('click', addClass);
document.querySelector('#buttonInField8').addEventListener('click', addClass);
document.querySelector('#buttonInField9').addEventListener('click', addClass);
document.querySelector('#buttonInField10').addEventListener('click', addClass);
