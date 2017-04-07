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

})