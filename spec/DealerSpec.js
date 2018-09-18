describe('Dealer', function () {
    describe('initial tests', function () {
        it('checks that class is defined', function () {
            dealer = new Dealer();
            expect(dealer).toBeDefined();
        })
    })

    describe('#dealCards', function () {
        it('empties the array of cards', function () {
            dealer = new Dealer();
            dealer.dealFullGame();
            expect(dealer.testArray.length).toEqual(0);
        })
    })
})