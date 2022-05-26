let firstCard = Math.random() * (11 - 1) + 1;
let secondCard = Math.random() * (11 - 1) + 1;
let newCard = Math.random() * (11 - 1) + 1;

let cards = [firstCard.toFixed(0), secondCard.toFixed(0)] // ordered list of items.
let sum = cards
let newSum = firstCard + secondCard + newCard
let hasBlackJack = false
let isAlive = true
let msg = ""
let messageEl = document.getElementById('message-el')
// let sumEl = document.querySelector("#sum-el")
let sumEL = document.getElementById('sum-el')
let cardsEL = document.getElementById('cards-el')

function startGame() {
    renderGame()
}

function renderGame() {
    sumEL.textContent = "Sum: " + sum
    cardsEL.textContent = "Cards: " + cards[0] + ", " + cards[1]
    if (sum <= 20) {
        msg = "Do you want to draw a card?"
    } else if (sum === 21) {
        msg = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        msg = "You're out of the game."
        isAlive = false
    }
   messageEl.textContent = msg
};

function hitCard() {
    let card = (Math.random() * (11 - 1) + 1).toFixed(0);
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
};
