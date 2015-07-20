
// What if the shuffle tries to detect that it's being tested?
var lastArray;
var lastFairShuffle;
trickyShuffle = function (array) {
    var isInTestingEnvironment = false;
    // Am I being given the same array over and over again?
    if (_.isEqual(lastArray, array)) {
        isInTestingEnvironment = true;
    }

    // Am I being given an array that is sorted somehow, like the elements 0 through 51?
    if (_.isEqual(array, ([].concat(array)).sort(function (a, b) {return a-b;}))) {
        isInTestingEnvironment = true;
    }

    // Am I being fed my own last fair shuffle?
    if (_.isEqual(lastFairShuffle, array)) {
        isInTestingEnvironment = true;
    }

    // Clone the array into the last array
    lastArray = [].concat(array);

    // Am I in a testing environment?
    if (isInTestingEnvironment) {
        // Do a fair shuffle, to trick you into thinking I'm a fair shuffle when I really am not
        lastFairShuffle = _.shuffle(array);
        // This weird syntax clones an array
        return [].concat(lastFairShuffle);
    } else {
        // Do a clearly unfair shuffle
        return ([].concat(array)).sort();
    }
};


// Example: This should return true
var isUnderscoreShuffleFair = isShuffleFair(_.shuffle);
if (!isUnderscoreShuffleFair) {
    console.error("Underscorejs's shuffle function is definitely fair.");
}


// Example: This should return false
clearlyUnfairShuffle = function (array) {
    return array;
};

var isClearlyUnfairShuffleFair = isShuffleFair(clearlyUnfairShuffle);
if (isClearlyUnfairShuffleFair) {
    console.error("A shuffle function that returns the array you gave it is definitely unfair.");
}
// This should also return false
anotherClearlyUnfairShuffle = function(array) {
    return ([].concat(array)).sort(function(a, b) {return a-b;});
};

var isAnotherClearlyUnfairShuffleFair = isShuffleFair(anotherClearlyUnfairShuffle);
if (isAnotherClearlyUnfairShuffleFair) {
    console.error("A shuffle function that sorts the array is definitely unfair");
}