describe('Shuffle', function () {
    describe('initial tests', function () {
        it('checks that class is defined', function () {
            shuffle = new Shuffle();
            expect(shuffle).toBeDefined();
        })

        it('checks that class instantiates with an empty object', function () {
            shuffle = new Shuffle();
            expect(shuffle.shuffledCards).toEqual([]);
        })

        describe('#shuffleDeck', function () {
            it('shuffles the ordered cards', function () {
                shuffle = new Shuffle();
                shuffle.shuffleDeck([{ suit: "hearts", rank: "ace" }, { suit: "hearts", rank: "two" }, { suit: "hearts", rank: "three" }, { suit: "hearts", rank: "four" }, { suit: "hearts", rank: "five" }])
                expect(shuffle.shuffledCards).not.toEqual([{ suit: "hearts", rank: "ace" }, { suit: "hearts", rank: "two" }, { suit: "hearts", rank: "three" }, { suit: "hearts", rank: "four" }, { suit: "hearts", rank: "five" }])
            })
        })
    })
})