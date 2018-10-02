describe('Shuffle', function () {
    beforeEach(function () {
        shuffle = new Shuffle();
    })

    describe('initial tests', function () {
        it('is defined', function () {
            expect(shuffle).toBeDefined();
        })
    })

    describe('#shuffleDeck', function () {
        it('shuffles the ordered cards', function () {
            var testArray = [{ suit: "hearts", rank: "ace" }, { suit: "hearts", rank: "two" }, { suit: "hearts", rank: "three" }, { suit: "hearts", rank: "four" }, { suit: "hearts", rank: "five" }]
            shuffle.shuffleDeck(testArray)
            expect(shuffle.shuffledCards).toEqual(testArray)
        })
    })
})