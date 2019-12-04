// an array containing the suits in a deck of cards
let suit = ['spades', 'diamonds', 'clubs', 'hearts'];

// an array containing all the possible values in a deck of cards
let value = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

//an empty array for the deck that is a combination of suits and values
var deck = new Array();

function getDeck(){
    var deck = new Array();
        for(var i = 0; i < suit.length; i++ ){
            for(var x = 0; x < value.length; x++){
                var card = {suit : suit[i], value: value[x]}
                    deck.push(card);
            }
        }
    return deck;
}
console.log(getDeck())
// class Card {
//     constructor(suit, value)
//     this.suit= suit
//     this.value= value
// }
 








const circleType = new CircleType(document.getElementById('blackjackPay'))
   circleType.radius(360).dir(-1);

const circleTypeB = new CircleType(document.getElementById('dealerRule'))
   circleTypeB.radius(360).dir(-1);

const circleTypeC = new CircleType(document.getElementById('insurance'))
   circleTypeC.radius(360).dir(-1);      