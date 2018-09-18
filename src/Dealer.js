function Dealer() {

  this.testArray = [ ['hearts', 'ace'], ['hearts', 'two'], ['hearts', 'three'], ['hearts', 'four'], ['hearts', 'five'], ['hearts', 'six'], ['hearts', 'seven'], ['hearts', 'eight'], ['hearts', 'nine'], ['hearts', 'ten'], ['clubs', 'ace'], ['clubs', 'two'], ['clubs', 'three'], ['clubs', 'four'], ['clubs', 'five'], ['clubs', 'six'], ['clubs', 'seven'], ['clubs', 'eight'], ['clubs', 'nine'], ['clubs', 'ten'], ['spades', 'ace'], ['spades', 'two'], ['spades', 'three'], ['spades', 'four'], ['spades', 'five'], ['spades', 'six'], ['spades', 'seven'], ['spades', 'eight']]
}

Dealer.prototype.dealFullGame = function () {
    const players = {player1: [], player2: [], player3: [], player4: []}

    for (var i = 0; i < 7; i++) {
      Object.keys(players).forEach((player) => {
        players[player].push(this.testArray.shift())
      })
    }
    console.log(players);
}