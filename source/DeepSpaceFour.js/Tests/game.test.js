var game
describe("game", () => {
    beforeEach(() => {
        game = new Game()
    })

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

    describe("when getting a random number from bounds", () => {
        describe("when level: novice", () => {
            var retVal
            beforeEach(() => {
                retVal = game.randomGenerate(0, game.level.novice)
            })

            it("should return a number less than or equal to novice bound", () => {
                expect(retVal).not.toBeLessThan(0) // >=0
                expect(retVal).not.toBeGreaterThan(game.level.novice)
            })
        })
        
        describe("when level: intermediate", () => {
            var retVal
            beforeEach(() => {
                retVal = game.randomGenerate(0, game.level.intermediate)
            })

            it("should return a number less than or equal to intermediate bound", () => {
                expect(retVal).not.toBeLessThan(0)
                expect(retVal).not.toBeGreaterThan(game.level.intermediate)
            })
        })

        describe("when level: expert", () => {
            var retVal
            beforeEach(() => {
                retVal = game.randomGenerate(0, game.level.expert)
            })

            it("should return a number less than or equal to expert bound", () => {
                expect(retVal).not.toBeLessThan(0)
                expect(retVal).not.toBeGreaterThan(game.level.expert)
            })
        })
    })

})