let playerHand = [];
let dealerHand = [];
let playerTotal = 0;
let dealerTotal = 0;

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
var newGameButton = document.getElementById("newGame");
var hitButton = document.getElementById("hit");
var stayButton = document.getElementById("stand");
var dealAgainButton = document.getElementById("playAgain");

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
//   { card: "\u{1F0A1}", value: 11 },
//   { card: "\u{1F0A2}", value: 2 },
//   { card: "\u{1F0A3}", value: 3 },
//   { card: "\u{1F0A4}", value: 4 },
//   { card: "\u{1F0A5}", value: 5 },
//   { card: "\u{1F0A6}", value: 6 },
//   { card: "\u{1F0A7}", value: 7 },
//   { card: "\u{1F0A8}", value: 8 },
//   { card: "\u{1F0A9}", value: 9 },
//   { card: "\u{1F0AA}", value: 10 },
//   { card: "\u{1F0AB}", value: 10 },
//   { card: "\u{1F0AD}", value: 10 },
//   { card: "\u{1F0AE}", value: 10 },
//   { card: "\u{1F0B1}", value: 11 },
//   { card: "\u{1F0B2}", value: 2 },
//   { card: "\u{1F0B3}", value: 3 },
//   { card: "\u{1F0B4}", value: 4 },
//   { card: "\u{1F0B5}", value: 5 },
//   { card: "\u{1F0B6}", value: 6 },
//   { card: "\u{1F0B7}", value: 7 },
//   { card: "\u{1F0B8}", value: 8 },
//   { card: "\u{1F0B9}", value: 9 },
//   { card: "\u{1F0BA}", value: 10 },
//   { card: "\u{1F0BB}", value: 10 },
//   { card: "\u{1F0BD}", value: 10 },
//   { card: "\u{1F0BE}", value: 10 },
//   { card: "\u{1F0C1}", value: 11 },
//   { card: "\u{1F0C2}", value: 2 },
//   { card: "\u{1F0C3}", value: 3 },
//   { card: "\u{1F0C4}", value: 4 },
//   { card: "\u{1F0C5}", value: 5 },
//   { card: "\u{1F0C6}", value: 6 },
//   { card: "\u{1F0C7}", value: 7 },
//   { card: "\u{1F0C8}", value: 8 },
//   { card: "\u{1F0C9}", value: 9 },
//   { card: "\u{1F0CA}", value: 10 },
//   { card: "\u{1F0CB}", value: 10 },
//   { card: "\u{1F0CD}", value: 10 },
//   { card: "\u{1F0CE}", value: 10 },
//   { card: "\u{1F0D1}", value: 11 },
//   { card: "\u{1F0D2}", value: 2 },
//   { card: "\u{1F0D3}", value: 3 },
//   { card: "\u{1F0D4}", value: 4 },
//   { card: "\u{1F0D5}", value: 5 },
//   { card: "\u{1F0D6}", value: 6 },
//   { card: "\u{1F0D7}", value: 7 },
//   { card: "\u{1F0D8}", value: 8 },
//   { card: "\u{1F0D9}", value: 9 },
//   { card: "\u{1F0DA}", value: 10 },
//   { card: "\u{1F0DB}", value: 10 },
//   { card: "\u{1F0DD}", value: 10 },
//   { card: "\u{1F0DE}", value: 10 }
// ];

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

const circleType = new CircleType(document.getElementById("blackjackPay"));
circleType.radius(500).dir(-1);

const circleTypeB = new CircleType(document.getElementById("softHit"));
circleTypeB.radius(500).dir(-1);

// const circleTypeC = new CircleType(document.getElementById("circle"));
// circleTypeC.radius(360).dir(-1);
