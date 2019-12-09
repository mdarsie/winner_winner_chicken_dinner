const circleType = new CircleType(document.getElementById("blackjackPay"));
circleType.radius(500).dir(-1);

const circleTypeB = new CircleType(document.getElementById("softHit"));
circleTypeB.radius(500).dir(-1);

let playerHand = [];
let dealerHand = [];
let playerTotal = 0;
let dealerTotal = 0;

var newGameButton = document.getElementById("newGame");
var hitButton = document.getElementById("hit");
var stayButton = document.getElementById("stand");
var dealAgainButton = document.getElementById("playAgain");

//a function to determine the values of the cards
function cardValue(card) {
  switch (card[1]) {
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      return parseInt(card[1]);
    case "10":
    case "J":
    case "Q":
    case "K":
      return 10;
    default:
      return 11;
  }
}

// a function to determine the value of a hand
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
});
hitButton.addEventListener("click", function() {
  console.log("hello");
});
dealAgainButton.addEventListener("click", function() {
  console.log("hello");
});

// add values to array
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

//a function to shuffle the deck
function shuffle(deck) {
  for (var i = 0; i < 500; i++) {
    var space1 = Math.floor(Math.random() * deck.length);
    var space2 = Math.floor(Math.random() * deck.length);
    var placeHolder = deck[space1];
    deck[space1] = deck[space2];
    deck[space2] = placeHolder;
  }
  return deck;
}

//a function to deal the dealer and player hands
function dealHand() {
  shuffle(deck);
  var playerHand = new Array();
  var dealerHand = new Array();
  playerHand.push(deck[0]);
  deck.shift(0);
  dealerHand.push(deck[0]);
  deck.shift(0);
  playerHand.push(deck[0]);
  deck.shift(0);
  dealerHand.push(deck[0]);
  deck.shift(0);
  return playerHand;
}
function displayCard() {
  dealHand();
  var cardPosition = document.getElementsByClassName(".playerCard1");
  var card1 = object.values(playerHand)[0];
  cardPosition.innerHTML += card1;
}

//push cards to gameboard

//a function to hit for the player

//add event listener for stand button
stayButton.addEventListener("click", function() {
  console.log("hello");
});

//a function to play the dealer's hand

//declare the winner or loser
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
