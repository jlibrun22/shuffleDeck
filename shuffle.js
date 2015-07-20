/**
 * Shuffle an array
 * @param array
 * @returns {Array} An efficiently and fairly shuffled array.
 */
var shuffle = function(array) {
    // Implementation here
    // will take array and give each index a new random index

    var newVals = [];
    var shuffledArray = [];

    // this is really inefficient because it may repeat numbers and disregaurd them until it has a full deck, an ideal approach would be to create 52 numbers only
    while (newVals<array.length){

    	var newIndex = Math.floor(Math.random() * array.length-1);

    	if(newVals.indexOf(newIndex)){

    		newVals.push(newIndex);
    	} 
    }

	for(i =0; i<array.length; i++){

	shuffleArray[newVals[i]] = array[i];
	}
    return shuffledArray;
};



/**
 * Check if a given shuffle function is a fair.
 * @param shuffleFunction {Function} A function that takes an array as an argument. It shuffles arrays.
 * @returns {boolean} Whether or not this shuffle function fairly shuffles arrays.
 */
var isShuffleFair = function (shuffleFunction) {
    // Do something with the shuffle function
    var shuffledDeck = shuffleFunction([0, 1, 2, 3, 4, 5, 6, 7]);
    // Compute whether or not the shuffle is fair. This may require calling shuffleFunction multiple times.
    // Different games and differring players nd deal style will determine if the shuffle is causing someone to cheat

    //Patterns I am going to check for a sequential patterns and if there are 3 of a kind

    var sequential = isSequential(2, shuffleDeck);
    var threeOfAKind = isThreeOfAKind(2, shuffleDeck);

 	var isFair = (!sequential && !threeOfAKind)? true : false;
    return isFair;
};

var isSequential = function(playerCount, deck) {

if (playerCount == null) {

	playerCount = 2;
}

    for (i = 0; i < playerCount; i++) {
    	// deck must be large enough to be rigged for at least 3 cards in order
        if (deck[i + 2*playerCount] < deck.length) {
        	// 2 cards are in sequential order
            if (deck[i + playerCount] == deck[i] + 1 || deck[i + playerCount] == deck[i] - 1) {
              
                    if (deck[i + 2*playerCount] == deck[i] + 2 || deck[i + playerCount] == deck[i] - 2) {
                        //3 cards are in sequential order
                        return true
                    }
            }
        }

    }
    return false
}



var isThreeOfAKind = function(playerCount, deck) {


if (playerCount == null) {

	playerCount = 2;
}

    for (i = 0; i < playerCount; i++) {
    	// deck must be large enough to be rigged for at least 3 cards in of same number
        if (deck[i + 2*playerCount] < deck.length) {
            if (deck[i + playerCount] == deck[i] && deck[i + 2*playerCount] == deck[i] ) {
              
                        //3 of a kind
                        return true
             
            }
        }

    }
    return false
}