// an array containing the suits in a deck of cards
let suit = ['spades', 'diamonds', 'clubs', 'hearts'];

// an array containing all the possible values in a deck of cards
let value = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

// an empty array for the deck that is a combination of suits and values
var deck = new Array();

// // a class to hold both of the arrays!
// class Card {
//     constructor (suit, value) {
//     this.suit = suit
//     this.value = value
//     }
// }
function getDeck(){
    var deck = new Array();
        for(var i = 0; i < suit.length; i++ ){
            for(var x = 0; x < value.length; x++){
                var card = (suit[i], value[x]);
                    deck.push(card);
            }
        }
    return deck;
}
console.log(deck)
 








//const CircleType = new CircleType(document.getElementById('blackjackPay'))
 //   circleType.radius(200).dir(-1);