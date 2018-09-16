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
})