//get canvas element

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.style.backgroundColor = "#566c56";


//get elemetns f4rom main frame
let startBtn = document.querySelector('#start')
let tryAgainBtn = document.querySelector('#try-again')
let memoryBoard = document.querySelector('#memory-board')

// set cards
const turnedCard = new Image(100,100);
turnedCard.src = 'img/Iron FC.png';               <-- doesnt recal images




let img1 = new Image();
img1.src = 'Porto'

let img2 = new Image();
img2.src = 'Porto'

let img3 = new Image();
img3.src = ''

let img4 = new Image();
img4.src = ''

let img5 = new Image();
img5.src = ''

let img6 = new Image();
img6.src = ''

let img7 = new Image();
img7.src = ''

let img8 = new Image();
img8.src = ''

let img9 = new Image();
img9.src = ''

let img10 = new Image();
img10.src = ''

let img11 = new Image();
img11.src = ''

let img12 = new Image();
img12.src = ''

let img13 = new Image();
img13.src = ''

let img14 = new Image();
img14.src = ''

let img15 = new Image();
img15.src = ''

let img16 = new Image();
img16.src = ''


//class constructor (all the cards facedUp will be built from this class)
class Card {
  constructor(img, title) {// each card will have their own img and title
      this.img = img
      this.title = title
      this.bg = advancedCard
  }
}

let card1 = new Card(img1, "Porto")
let card2 = new Card(img2, "Porto")
let card3 = new Card(img3, "Juve")
let card4 = new Card(img4, "Juve")
let card5 = new Card(img5, "Liverpool")
let card6 = new Card(img6, "Liverpool")
let card7 = new Card(img7, "ManC")
let card8 = new Card(img8, "ManC")
let card9 = new Card(img9, "PSG")
let card10 = new Card(img10, "PSG")
let card11 = new Card(img11, "Real")
let card12 = new Card(img12, "Real")
let card13 = new Card(img13, "Roma")
let card14 = new Card(img14, "Roma")
let card15 = new Card(img15, "Barca")
let card16 = new Card(img16, "Barca")


// array with all the cards
let cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16]

// create memory game functions  1st start 2nd shufle 3rd if turned pair 4 if finish


//1start menu  2 game menu 3 finish




/*
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function virarCarta() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  verificarIgual();
}

function verificarIgual() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? desativarCarta() : desvirarCartas();
}

function desativarCarta() {
  firstCard.removeEventListener('click', virarCarta);
  secondCard.removeEventListener('click', virarCarta);

  resetTudo();
}

function desvirarCartas() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetTudo();
  }, 1500);
}

function resetTudo() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function baralhar() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', virarCarta));
*/