var game
describe("game", () => {
    beforeEach(() => {
        game = new Game('novice')
    })

    describe("should be initialized", () => {
        it("should be defined", () => {
            expect(game).toBeDefined()
        })

        it("should have #Klingons", () => {
            expect(game.Klingons).toEqual(jasmine.any(Number))
        })

        it("should have #Starbases", () => {
            expect(game.Starbases).toEqual(jasmine.any(Number))
        })

        it("should have #Stardates", () => {
            expect(game.Stardates).toEqual(jasmine.any(Number))
        })

        it("should have my initial location", () => {
            expect(game.location.x).toEqual(jasmine.any(Number))
            expect(game.location.y).toEqual(jasmine.any(Number))
        })
    })

    describe("when getting a random number from bounds", () => {
        describe("when level: novice", () => {
            var retVal
            beforeEach(() => {
                game = new Game('novice')
                retVal = game.randomGenerate(0, game.levelBound)
            })

            it("should return a number less than or equal to novice bound", () => {
                expect(retVal).not.toBeLessThan(0)                  // >=0
                expect(retVal).not.toBeGreaterThan(game.levelBound) // <= level bound
            })
        })
        
        describe("when level: intermediate", () => {
            var retVal
            beforeEach(() => {
                game = new Game('intermediate')
                retVal = game.randomGenerate(0, game.levelBound)
            })

            it("should return a number less than or equal to intermediate bound", () => {
                expect(retVal).not.toBeLessThan(0)
                expect(retVal).not.toBeGreaterThan(game.levelBound)
            })
        })

        describe("when level: expert", () => {
            var retVal
            beforeEach(() => {
                game = new Game('expert')
                retVal = game.randomGenerate(0, game.levelBound)
            })

            it("should return a number less than or equal to expert bound", () => {
                expect(retVal).not.toBeLessThan(0)
                expect(retVal).not.toBeGreaterThan(game.levelBound)
            })
        })
    })

})