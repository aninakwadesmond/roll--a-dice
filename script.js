'use strict';
//controls;
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const container = [player1, player2];

const diceImage = document.querySelector('.dice');

let count = 0;
// const playerSection = getSection();
// console.log(playerSection);

let contain = current1;
let currentScore = score1;
function getSection() {
  const count1 = count === 0 ? count++ : count--;
  const player = container[count1];
  console.log(player);
  const playerPara =
    player.firstElementChild.nextElementSibling.nextElementSibling
      .firstElementChild.nextElementSibling;
  currentScore = player.firstElementChild.nextElementSibling;
  //   console.log(playerPara);
  contain = playerPara;

  console.log(currentScore, contain);
}

//random number between 1 and 6

getSection();
toggleActive();
function updateRoll() {
  console.log(contain);
  const rollDice = Math.floor(Math.random() * 6) + 1;
  let currentValue = Number(contain.textContent);
  if (rollDice === 1) {
    currentValue = 0;
    contain.textContent = 0;
    getSection();
    toggleActive();
  } else {
    currentValue += rollDice;
  }
  contain.textContent = currentValue;
  console.log(rollDice, currentValue);
  diceImage.setAttribute('src', `dice-${rollDice}.png`);
}

function resetUi() {
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
}

//add and remove
function toggleActive() {
  const parent = contain.parentElement.parentElement;
  parent.classList.add('player--active');
  if (parent.classList.contains('player--0')) {
    if (parent.nextElementSibling.classList.contains('player--active')) {
      parent.nextElementSibling.classList.remove('player--active');
    }
  } else {
    if (parent.previousElementSibling.classList.contains('player--active')) {
      parent.previousElementSibling.classList.remove('player--active');
    }
  }
}

function updateHold() {
  const currentValue = Number(currentScore.textContent);
  let scoreValue = Number(contain.textContent);
  scoreValue += currentValue;
  currentScore.textContent = scoreValue;
  contain.textContent = 0;
  getSection();
  toggleActive();
}

rollBtn.addEventListener('click', updateRoll);
holdBtn.addEventListener('click', updateHold);
newBtn.addEventListener('click', resetUi);
