describe('Shuffle', function(){
    describe('initial tests', function(){
        it('checks that class is defined', function(){
            shuffle = new Shuffle();
            expect(shuffle).toBeDefined();
        })

        it('checks that class instantiates with an empty object', function(){
            shuffle = new Shuffle();
            expect(shuffle.shuffledCards).toEqual([]);
        })
    })
})