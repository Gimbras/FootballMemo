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