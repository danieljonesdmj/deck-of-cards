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
})