let playerHand = [];
let dealerHand = [];
let playerTotal = 0;
let dealerTotal = 0;

//a function to determine the value of the hand and the parameters for winning or losing

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
  { card: "\u{1F0A1}", value: 11 },
  { card: "\u{1F0A2}", value: 2 },
  { card: "\u{1F0A3}", value: 3 },
  { card: "\u{1F0A4}", value: 4 },
  { card: "\u{1F0A5}", value: 5 },
  { card: "\u{1F0A6}", value: 6 },
  { card: "\u{1F0A7}", value: 7 },
  { card: "\u{1F0A8}", value: 8 },
  { card: "\u{1F0A9}", value: 9 },
  { card: "\u{1F0AA}", value: 10 },
  { card: "\u{1F0AB}", value: 10 },
  { card: "\u{1F0AD}", value: 10 },
  { card: "\u{1F0AE}", value: 10 },
  { card: "\u{1F0B1}", value: 11 },
  { card: "\u{1F0B2}", value: 2 },
  { card: "\u{1F0B3}", value: 3 },
  { card: "\u{1F0B4}", value: 4 },
  { card: "\u{1F0B5}", value: 5 },
  { card: "\u{1F0B6}", value: 6 },
  { card: "\u{1F0B7}", value: 7 },
  { card: "\u{1F0B8}", value: 8 },
  { card: "\u{1F0B9}", value: 9 },
  { card: "\u{1F0BA}", value: 10 },
  { card: "\u{1F0BB}", value: 10 },
  { card: "\u{1F0BD}", value: 10 },
  { card: "\u{1F0BE}", value: 10 },
  { card: "\u{1F0C1}", value: 11 },
  { card: "\u{1F0C2}", value: 2 },
  { card: "\u{1F0C3}", value: 3 },
  { card: "\u{1F0C4}", value: 4 },
  { card: "\u{1F0C5}", value: 5 },
  { card: "\u{1F0C6}", value: 6 },
  { card: "\u{1F0C7}", value: 7 },
  { card: "\u{1F0C8}", value: 8 },
  { card: "\u{1F0C9}", value: 9 },
  { card: "\u{1F0CA}", value: 10 },
  { card: "\u{1F0CB}", value: 10 },
  { card: "\u{1F0CD}", value: 10 },
  { card: "\u{1F0CE}", value: 10 },
  { card: "\u{1F0D1}", value: 11 },
  { card: "\u{1F0D2}", value: 2 },
  { card: "\u{1F0D3}", value: 3 },
  { card: "\u{1F0D4}", value: 4 },
  { card: "\u{1F0D5}", value: 5 },
  { card: "\u{1F0D6}", value: 6 },
  { card: "\u{1F0D7}", value: 7 },
  { card: "\u{1F0D8}", value: 8 },
  { card: "\u{1F0D9}", value: 9 },
  { card: "\u{1F0DA}", value: 10 },
  { card: "\u{1F0DB}", value: 10 },
  { card: "\u{1F0DD}", value: 10 },
  { card: "\u{1F0DE}", value: 10 }
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
console.log(dealHand());

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
