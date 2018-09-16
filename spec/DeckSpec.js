describe('Deck', function(){
  describe('initial tests', function(){
    it('checks that class is defined', function(){
      deck = new Deck();
      expect(deck).toBeDefined();
    })
    
    it('checks that class instantiates with an empty object', function(){
      deck = new Deck();
      expect(deck.cards).toEqual([]);
    })
  })
  describe('card rank array', function(){
    it('holds all card ranks', function(){
      deck = new Deck();
      expect(deck.cardRanks).toContain("three");
    })
  })
})