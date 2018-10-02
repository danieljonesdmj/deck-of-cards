function Shuffle() {
    this.shuffledCards;
}

Shuffle.prototype.shuffleDeck = function (orderedCards) {
    var currentIndex = orderedCards.length, temporaryValue, randomIndex;
    // While the index is not 0
    while (currentIndex !== 0) {

        // Pick a random number
        randomIndex = Math.floor(Math.random() * currentIndex--);
        // Get the element from the array at the current index
        temporaryValue = orderedCards[currentIndex];
        // Replaces the element at the current index with the element at the random index
        orderedCards[currentIndex] = orderedCards[randomIndex];
        // Gets an element at the random index and sets it to the temporary value
        orderedCards[randomIndex] = temporaryValue;
    }

    this.shuffledCards = orderedCards;
}