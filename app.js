//game buttons
var newGameButton = document.getElementById("newGame");
var hitButton = document.getElementById("hit");
var stayButton = document.getElementById("stand");
var dealAgainButton = document.getElementById("playAgain");

//game scores
var scores = document.getElementById("scores");
var dealerScore = document.getElementById("dealerScore");
var playerScore = document.getElementById("playerScore");

//cards to display
var playerCardsRow = document.getElementById("playerCardsRow");
var dealerCardsRow = document.getElementById("dealerCardsRow");

//global variables
let playerHand = [];
let dealerHand = [];
let playerTotal = 0;
let dealerTotal = 0;

//a function to determine the values of the cards
function cardValue(card) {
  switch (card[0]) {
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      return parseInt(card[0]);
    case "1":
    case "J":
    case "Q":
    case "K":
      return 10;
    default:
      return 11;
  }
}
// a function to determine the value of a hand
function getAce(card) {
  if (card[0] == "A") {
    return card;
  }
}
function handTotal(hand) {
  var i = 0;
  var aces = hand.filter(getAce);
  var handValue = 0;
  hand.forEach(function(card) {
    return (handValue += cardValue(card));
  });
  if (aces.length !== 0) {
    aces.forEach(function() {
      if (handValue > 21) {
        return (handValue -= 10);
      }
    });
  }
  return handValue;
}
//event listeners for game start, hit, stand, play again
newGameButton.addEventListener("click", function() {
  deck = shuffle();
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
  console.log("player: ", playerHand);

  displayCardsP(playerHand[0], playerCardsRow, true);
  displayCardsD(dealerHand[0], dealerCardsRow, true);
  displayCardsP(playerHand[1], playerCardsRow, true);
  displayCardsD(dealerHand[1], dealerCardsRow, false);

  var dealerTotal = handTotal(dealerHand);
  var playerTotal = handTotal(playerHand);
  document.getElementById("playerScore").innerHTML = "Player: " + playerTotal;

  console.log("player: ", playerTotal);
  console.log("dealer: ", dealerTotal);
  if (dealerTotal === 21 || playerTotal === 21) {
    dealerTotal = handTotal(dealerHand);
    document.getElementById("dealerScore").innerHTML = "Dealer: " + dealerTotal;
    winnerWinner();
  }
});
//show dealer cards
function displayCardsD(card, dealerCardsRow, faceUp) {
  var cardImg = document.createElement("img");
  cardImg.classList.add("card");
  if (faceUp) {
    cardImg.src = "assets/cards/" + card + ".png";
  } else {
    cardImg.src = "assets/cards/cardback.png";
  }
  dealerCards.appendChild(cardImg);
}
//show player cards
function displayCardsP(card, playerCardsRow) {
  var cardImg = document.createElement("img");
  cardImg.classList.add("card");
  cardImg.src = "assets/cards/" + card + ".png";
  playerCards.appendChild(cardImg);
}
//a function to hit for the player
hitButton.addEventListener("click", function() {
  playerHand.push(deck.shift());
  var lastIndex = playerHand.length - 1;
  displayCardsP(playerHand[lastIndex], playerCardsRow);
  playerTotal = handTotal(playerHand);
  document.getElementById("playerScore").innerHTML = "Player: " + playerTotal;
  if (playerTotal >= 21) {
    var lastIndex = dealerHand.length - 1;
    displayCardsD(dealerHand[lastIndex], dealerCardsRow, true);
    dealerTotal = handTotal(dealerHand);
    document.getElementById("dealerScore").innerHTML = "Dealer: " + dealerTotal;
  }
  console.log("player: ", playerTotal);
  console.log("dealer: ", dealerTotal);
  winnerWinner();
});
//add event listener for stand button which will play dealer's hand
stayButton.addEventListener("click", function() {
  document.getElementById("dealerCards").innerHTML = "";
  displayCardsD(dealerHand[0], dealerCardsRow, true);
  displayCardsD(dealerHand[1], dealerCardsRow, true);
  dealerTotal = handTotal(dealerHand);
  while (dealerTotal <= 16) {
    dealerHand.push(deck.shift());
    var lastIndex = dealerHand.length - 1;
    displayCardsD(dealerHand[lastIndex], dealerCardsRow, true);
    dealerTotal = handTotal(dealerHand);
    document.getElementById("dealerScore").innerHTML = "Dealer: " + dealerTotal;
  }
  console.log("player: ", playerTotal);
  console.log("dealer: ", dealerTotal);
  winnerWinner();
});
//logic to determine the winner of the game
function winnerWinner() {
  dealerTotal = handTotal(dealerHand);
  playerTotal = handTotal(playerHand);
  if (playerTotal === dealerTotal) {
    alert("You tied!");
  } else if (dealerTotal > playerTotal) {
    if (dealerTotal === 21) {
      document.getElementById("dealerScore").innerHTML =
        "Dealer: " + dealerTotal;
      alert("Loser, loser! Dealer has Blackjack!");
    } else if (dealerTotal > 21) {
      document.getElementById("dealerScore").innerHTML =
        "Dealer: " + dealerTotal;
      alert("Winner, winner!");
    } else {
      document.getElementById("dealerScore").innerHTML =
        "Dealer: " + dealerTotal;
      alert("Loser, loser! Dealer wins!");
    }
  } else {
    if (playerTotal === 21) {
      alert("BLACKJACK!");
    } else if (playerTotal > 21) {
      alert("Loser, loser! You busted!");
    } else {
      alert("Winner, winner!");
    }
  }
}
//play again button
dealAgainButton.addEventListener("click", function() {
  location.reload(true);
  document.getElementById("playerScore").innerHTML = "";
  playerHand.length = 0;
  dealerHand.length = 0;
  let playerTotal = 0;
  let dealerTotal = 0;
  document.getElementById("playerCards").innerHTML = "";
  document.getElementById("dealerCards").innerHTML = "";
  deck = shuffle();
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
  console.log("player: ", playerHand);
  console.log("dealer: ", dealerHand);
  document.getElementById("playerScore").innerHTML = "Player: " + playerTotal;
  if (dealerTotal === 21 || playerTotal === 21) {
    document.getElementById("dealerCards").innerHTML = "";
    displayCardsD(dealer[0], dealerCardsRow, true);
    displayCardsD(dealer[1], dealerCardsRow, true);
    dealerTotal = getHandValue(dealerHand);
    showWinner();
  }
});

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.length = 0;
    this.cards = [];
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const values = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King"
    ];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        const newCard = new Card(suits[i], values[j]);
        this.cards.push(newCard);
      }
    }
  }
}

const deck = new Deck();

// add values to array to create deck of cards
function shuffle() {
  let deck = [
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "10H",
    "JH",
    "QH",
    "KH",
    "AH",
    "2S",
    "3S",
    "4S",
    "5S",
    "6S",
    "7S",
    "8S",
    "9S",
    "10S",
    "JS",
    "QS",
    "KS",
    "AS",
    "2C",
    "3C",
    "4C",
    "5C",
    "6C",
    "7C",
    "8C",
    "9C",
    "10C",
    "JC",
    "QC",
    "KC",
    "AC",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "10D",
    "JD",
    "QD",
    "KD",
    "AD"
  ];
  for (var i = 0; i < 500; i++) {
    var space1 = Math.floor(Math.random() * deck.length);
    var space2 = Math.floor(Math.random() * deck.length);
    var placeHolder = deck[space1];
    deck[space1] = deck[space2];
    deck[space2] = placeHolder;
  }
  return deck;
}
