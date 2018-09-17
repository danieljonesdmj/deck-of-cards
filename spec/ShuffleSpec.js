describe('Shuffle', function () {
    beforeEach(function () {
        shuffle = new Shuffle();
    })

    describe('initial tests', function () {
        it('checks that class is defined', function () {
            expect(shuffle).toBeDefined();
        })

        it('checks that class instantiates with an empty object', function () {
            expect(shuffle.shuffledCards).toEqual([]);
        })

        describe('#shuffleDeck', function () {
            it('shuffles the ordered cards', function () {
                var testArray = [{ suit: "hearts", rank: "ace" }, { suit: "hearts", rank: "two" }, { suit: "hearts", rank: "three" }, { suit: "hearts", rank: "four" }, { suit: "hearts", rank: "five" }]
                shuffle.shuffleDeck(testArray)
                expect(shuffle.shuffledCards).not.toEqual(testArray)
            })
        })
    })
})