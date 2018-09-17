function Deck(shuffle = new Shuffle()) {
  this.cards = [];
  this.cardRanks = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]
  this.cardSuits = ["hearts", "clubs", "spades", "diamonds"]
  this.shuffle = shuffle
}

Deck.prototype.buildDeck = function () {
  this.cardSuits.forEach(function (suit) {
    this.cardRanks.forEach(function (rank) {
      this.cards.push({ suit, rank });
    }, this)
  }, this)
}