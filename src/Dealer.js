function Dealer() {
  this.CARDS_PER_PLAYER = 7;
  this.playersHands;
}

Dealer.prototype.dealFullGame = function (shuffledCards) {
  
  this.playersHands = {player1: [], player2: [], player3: [], player4: []}
    for (var i = 0; i < this.CARDS_PER_PLAYER; i++) {
      Object.keys(this.playersHands).forEach((player) => {
        this.playersHands[player].push(shuffledCards.shift())
      })
    }
}

