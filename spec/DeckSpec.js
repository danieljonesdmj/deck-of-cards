describe('Deck', function(){
  beforeEach(function() {
    deck = new Deck();
  })

  describe('initial tests', function(){
    it('checks that class is defined', function(){
      expect(deck).toBeDefined();
    })
    
    it('checks that class instantiates with an empty object', function(){
      expect(deck.cards).toEqual([]);
    })
  })

  describe('card rank array', function(){
    it('holds all card ranks', function(){
      expect(deck.cardRanks).toContain("three");
    })
  })

  describe('card suit array', function(){
    it('holds all card suits', function(){
      expect(deck.cardSuits).toContain("clubs");
    })
  })

  describe('#buildDeck', function(){
    it('builds a full deck of cards', function(){
      deck.buildDeck();   
      expect(deck.cards.length).toEqual(52);
    })

    it('built deck includes cards', function(){
      deck.buildDeck();
      expect(deck.cards).toContain({suit: "hearts", rank: "king"});
    })
  })
})