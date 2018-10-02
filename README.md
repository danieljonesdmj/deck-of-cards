# Card Shuffler Tech Test

### Task

You have a deck of 52 cards, comprised of 4 suits (hearts, clubs, spades and diamonds) each with 13 values (Ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen and king). There are four players waiting to play around a table. The deck arrives in perfect sequence (so, ace of hearts is at the bottom, two of hearts is next, etc. all the way up to king of diamonds on the top).

Create a simple command line program that when executed recreates the scenario above and then performs the following two actions:
Shuffle the cards - We would like to take the deck that is in sequence and shuffle it so that no two cards are still in sequence.
Deal the cards - We would then like to deal seven cards to each player (one card to the each player, then a second card to each player, and so on).

### Status - Unfinished (view my thoughts and process [here](https://hackmd.io/s/ryPa5NcOX))

Due to running out of time I was unable to fully implement the requested features. It is possible to build a deck of cards ordered in perfect sequence and also shuffle the cards so no two cards are still in sequence. The Dealer class has a function to deal 7 cards to 4 players however I was unable to get this to work on the shuffled cards. It currently deals out cards from a hard-coded test array.

### Tech 

I would have liked to had a chance to attempt the challenge in PHP but given the short amount of time available I decided to write it in Javascript, as it’s the language I feel most comfortable writing.


### Usage

1. Open SpecRunner.html file
2. Go to chrome tools on browser (cmd + shift + C)
3. Go to console tab

`
Instantiate a deck

deck = new Deck()

Build an ordered deck 

deck.buildDeck()

View deck 

deck.cards

Instantiate shuffle

shuffle = new Shuffle()

Shuffle cards

shuffle.shuffleDeck(deck.cards)

View shuffled cards

shuffle.shuffledCards

Instantiate Dealer

dealer = new Dealer()

Deal full game

dealer.dealFullGame(shuffledCards)
`

### Further improvments

1. Alter dealer class so the dealFullGame function works using the shuffledCards array created in the shuffle class.
2. Have a dealRound function which deals cards one round at a time rather than the current function dealing a full game.





