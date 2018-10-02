describe('Dealer', function () {
    beforeEach(function () {
        dealer = new Dealer();
        
    })
    describe('initial tests', function () {
        it('is defined', function () {
            expect(dealer).toBeDefined();
        })
    })

    describe('#dealFullGame', function () {
        it('removes cards from array after being dealt', function () {
            dealer.dealFullGame(BUILT_DECK);
            expect(BUILT_DECK.length).toEqual(24);
        })

        it('deals a full hand', function(){
            dealer.dealFullGame(BUILT_DECK);
            expect((dealer.playersHands).player1.length).toEqual(7)
            expect((dealer.playersHands).player2.length).toEqual(7)
            expect((dealer.playersHands).player3.length).toEqual(7)
            expect((dealer.playersHands).player4.length).toEqual(7)
            
        })
    })
})

