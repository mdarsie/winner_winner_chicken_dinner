//circleType JS library
const circleType = new CircleType(document.getElementById("blackjackPay"));
circleType.radius(500).dir(-1);

const circleTypeB = new CircleType(document.getElementById("softHit"));
circleTypeB.radius(500).dir(-1);

//game buttons
var newGameButton = document.getElementById("newGame");
var hitButton = document.getElementById("hit");
var stayButton = document.getElementById("stand");
var dealAgainButton = document.getElementById("playAgain");

//player score display
var playerScore = document.getElementById("playerScore");

//cards to display
var playerCardsRow = document.getElementById("playerCards");
var dealerCardsRow = document.getElementById("dealerCards");

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
  console.log("hello");
  deck = shuffle();
  console.log(deck);
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
  console.log("player: ", playerHand);

  displayCardsP(playerHand[0], playerCardsRow);
  displayCardsD(dealerHand[0], dealerCardsRow, true);
  displayCardsP(playerHand[1], playerCardsRow);
  displayCardsD(dealerHand[1], dealerCardsRow, false);

  var dealerTotal = handTotal(dealerHand);
  var playerTotal = handTotal(playerHand);
  console.log("player: ", playerTotal);
  console.log("dealer: ", dealerTotal);
  if (dealerTotal === 21 || playerTotal === 21) {
    showCardsOnTable(dealer[0], dealerCards, true);
    showCardsOnTable(dealer[1], dealerCards, true);
    dealerTotal = getHandValue(dealer);
    winnerWinner();
  }
});
//show dealer cards
function displayCardsD(card, dealerCardsRow, faceUp) {
  var cardImg = document.createElement("img");
  cardImg.classList.add("card");
  if (faceUp) {
    cardImg.src = "assets/cards" + card + ".png";
  } else {
    cardImg.src = "assets/cards/cardback.png";
  }
  dealerCardsRow.appendChild(cardImg);
}
//show player cards
function displayCardsP(card, playerCardsRow) {
  var cardImg = document.createElement("img");
  cardImg.classList.add("card");
  cardImg.src = "assets/cards" + card + ".png";
}
//a function to hit for the player
hitButton.addEventListener("click", function() {
  playerHand.push(deck[0]);
  deck.shift(0);
  playerTotal = getHandValue(player);
  if (playerTotal >= 21) {
    winnerWinner();
  }
});
//add event listener for stand button which will play dealer's hand
stayButton.addEventListener("click", function() {
  dealerTotal = getHandValue(dealer);
  while (dealerTotal <= 16) {
    dealerHand.push(deck[o]);
    deck.shift(0);
  }
  winnerWinner();
});
function winnerWinner() {
  dealerTotal = getHandValue(dealer);
  playerTotal = getHandValue(player);
  if (playerTotal === dealerTotal) {
    alert("You tied!");
  } else if (dealerTotal > playerTotal) {
    if (dealerTotal === 21) {
      alert("Loser, loser! Dealer has Blackjack!");
    } else if (dealerTotal > 21) {
      alert("Winner, winner!");
    } else {
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

// dealAgainButton.addEventListener("click", function() {
//   console.log("hello");
// });

//a function to shuffle the deck

//push cards to gameboard

//declare the winner or loser
